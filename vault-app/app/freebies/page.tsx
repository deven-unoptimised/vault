'use client';

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function FreebiesPage() {
    const freebies = useQuery(api.freebies.getAll);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="border-b bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-3xl">🎁</span>
                        <span className="text-2xl font-bold text-gray-900">Vault</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Free Resources</h1>
                    <p className="text-gray-600">Download any resource instantly, no sign-up required</p>
                </div>

                {/* Freebies Grid */}
                {!freebies ? (
                    <div className="text-center py-12">Loading freebies...</div>
                ) : freebies.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 mb-4">No freebies available yet.</p>
                        <p className="text-sm text-gray-500">Check back soon for free resources!</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {freebies.map((freebie) => (
                            <Card key={freebie._id} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4">
                                    {freebie.featured && (
                                        <Badge className="mb-2">Featured</Badge>
                                    )}
                                    <h3 className="text-xl font-semibold mb-2">{freebie.title}</h3>
                                    <p className="text-gray-600 text-sm">{freebie.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {freebie.tags.map((tag) => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <span>👁️ {freebie.viewCount} views</span>
                                    <span>⬇️ {freebie.downloadCount} downloads</span>
                                </div>

                                <Link href={`/freebies/${freebie._id}`}>
                                    <Button className="w-full">View Details</Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
