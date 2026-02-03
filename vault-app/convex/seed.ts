import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Seed initial freebies (for development/demo)
export const seedFreebies = mutation({
    args: {},
    handler: async (ctx) => {
        const existingFreebies = await ctx.db.query("freebies").collect();

        // Only seed if no freebies exist
        if (existingFreebies.length > 0) {
            return { message: "Freebies already seeded", count: existingFreebies.length };
        }

        const freebies = [
            {
                title: "Ultimate Productivity Checklist",
                description: "A comprehensive checklist to boost your daily productivity. Includes morning routines, task prioritization, and end-of-day reviews.",
                category: "checklist",
                thumbnailUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
                downloadUrl: "#",
                downloadCount: 0,
                viewCount: 0,
                tags: ["productivity", "checklist", "daily-routine"],
                featured: true,
                createdAt: Date.now(),
            },
            {
                title: "Startup Launch Guide",
                description: "Step-by-step guide to launching your startup. From idea validation to first customers.",
                category: "guide",
                thumbnailUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400",
                downloadUrl: "#",
                downloadCount: 0,
                viewCount: 0,
                tags: ["startup", "business", "launch"],
                featured: true,
                createdAt: Date.now() - 86400000,
            },
            {
                title: "Social Media Content Calendar",
                description: "Plan your social media content for the entire month with this easy-to-use template.",
                category: "template",
                thumbnailUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
                downloadUrl: "#",
                downloadCount: 0,
                viewCount: 0,
                tags: ["social-media", "content", "marketing"],
                featured: false,
                createdAt: Date.now() - 172800000,
            },
            {
                title: "The Indie Hacker Playbook",
                description: "Everything you need to know about building and growing a profitable indie business.",
                category: "ebook",
                thumbnailUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
                downloadUrl: "#",
                downloadCount: 0,
                viewCount: 0,
                tags: ["indie-hacker", "business", "ebook"],
                featured: true,
                createdAt: Date.now() - 259200000,
            },
            {
                title: "Email Marketing Swipe File",
                description: "50+ proven email templates that convert. Perfect for newsletters, launches, and sales.",
                category: "template",
                thumbnailUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400",
                downloadUrl: "#",
                downloadCount: 0,
                viewCount: 0,
                tags: ["email", "marketing", "templates"],
                featured: false,
                createdAt: Date.now() - 345600000,
            },
            {
                title: "SEO Audit Checklist",
                description: "Complete SEO audit checklist to improve your website's search rankings.",
                category: "checklist",
                thumbnailUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400",
                downloadUrl: "#",
                downloadCount: 0,
                viewCount: 0,
                tags: ["seo", "checklist", "website"],
                featured: false,
                createdAt: Date.now() - 432000000,
            },
        ];

        for (const freebie of freebies) {
            await ctx.db.insert("freebies", freebie);
        }

        return { message: "Freebies seeded successfully", count: freebies.length };
    },
});
