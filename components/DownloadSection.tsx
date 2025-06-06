import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { FaWindows, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DownloadSection: React.FC = () => {
    // Dummy function that does nothing
    const handleDisabledClick = () => {
        // Do nothing for disabled buttons
    };

    return (
        <section id="download" className="py-20 relative">
            <div className="absolute inset-0 hero-gradient opacity-30 -z-10"></div>

            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-accent">Download</span> Spectro
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Get started with Spectro today. It's free, open-source, and runs on your local machine.
                    </p>
                    <div className="mt-4">
                        <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                            Coming Soon!
                        </span>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <AnimatedSection delay={0.1} className="col-span-1">
                        <div className="glassmorphism rounded-lg p-6 h-full border border-white/10 flex flex-col">
                            <div className="text-4xl text-accent mb-4 flex justify-center">
                                <FaWindows />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center">Windows</h3>
                            <p className="text-text-muted mb-6 flex-grow text-center">
                                Download the Windows installer for the easiest setup experience.
                            </p>
                            <Button
                                className="w-full justify-center opacity-60 cursor-not-allowed"
                                onClick={handleDisabledClick}
                            >
                                Coming Soon
                            </Button>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="col-span-1">
                        <div className="glassmorphism rounded-lg p-6 h-full border border-white/10 flex flex-col">
                            <div className="text-4xl text-accent mb-4 flex justify-center">
                                <FaApple />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center">macOS</h3>
                            <p className="text-text-muted mb-6 flex-grow text-center">
                                Download the macOS DMG file for both Intel and Apple Silicon Macs.
                            </p>
                            <Button
                                className="w-full justify-center opacity-60 cursor-not-allowed"
                                onClick={handleDisabledClick}
                            >
                                Coming Soon
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection; 