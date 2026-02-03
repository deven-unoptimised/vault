import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Lead magnets / Freebies
    freebies: defineTable({
        title: v.string(),
        description: v.string(),
        category: v.string(), // "ebook", "template", "guide", "checklist"
        thumbnailUrl: v.optional(v.string()),
        fileId: v.optional(v.id("_storage")), // For file uploads
        downloadUrl: v.optional(v.string()), // External download link
        downloadCount: v.number(),
        viewCount: v.number(),
        tags: v.array(v.string()),
        featured: v.boolean(),
        createdAt: v.number(),
    })
        .index("by_category", ["category"])
        .index("by_featured", ["featured"]),

    // Track downloads (anonymous)
    downloads: defineTable({
        freebieId: v.id("freebies"),
        ipHash: v.optional(v.string()), // Hash of IP for basic tracking
        downloadedAt: v.number(),
    }).index("by_freebie", ["freebieId"]),
});
