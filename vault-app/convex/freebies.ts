import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all freebies (public)
export const getAll = query({
    handler: async (ctx) => {
        return await ctx.db
            .query("freebies")
            .order("desc")
            .collect();
    },
});

// Get featured freebies (public)
export const getFeatured = query({
    handler: async (ctx) => {
        return await ctx.db
            .query("freebies")
            .withIndex("by_featured", (q) => q.eq("featured", true))
            .order("desc")
            .take(6);
    },
});

// Get by category (public)
export const getByCategory = query({
    args: { category: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("freebies")
            .withIndex("by_category", (q) => q.eq("category", args.category))
            .order("desc")
            .collect();
    },
});

// Get single freebie (public)
export const getById = query({
    args: { id: v.id("freebies") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

// Increment view count (public)
export const incrementView = mutation({
    args: { id: v.id("freebies") },
    handler: async (ctx, args) => {
        const freebie = await ctx.db.get(args.id);
        if (!freebie) throw new Error("Freebie not found");

        await ctx.db.patch(args.id, {
            viewCount: freebie.viewCount + 1,
        });
    },
});

// Track download (public)
export const trackDownload = mutation({
    args: {
        freebieId: v.id("freebies"),
        ipHash: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Increment download count
        const freebie = await ctx.db.get(args.freebieId);
        if (!freebie) throw new Error("Freebie not found");

        await ctx.db.patch(args.freebieId, {
            downloadCount: freebie.downloadCount + 1,
        });

        // Log the download
        await ctx.db.insert("downloads", {
            freebieId: args.freebieId,
            ipHash: args.ipHash,
            downloadedAt: Date.now(),
        });

        return { success: true };
    },
});
