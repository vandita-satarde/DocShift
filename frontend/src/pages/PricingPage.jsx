import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Pricingcomponent from "../components/Pricingcomponent";
import checkcircle from "../assets/images/Checkcircle.png";
import Footer from "../components/Footer";

function PricingPage() {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Pricing data
    const plans = [
        {
            name: "Basic",
            monthly: "390 rs/month",
            yearly: "3900 rs/year",
            num: "10",
            features: [
                "Everything in Basic",
                "Access to standard templates & UI blocks",
            ],
        },
        {
            name: "Standard",
            monthly: "490 rs/month",
            yearly: "4900 rs/year",
            num: "20",
            features: [
                "Everything in Basic",
                "Access to standard templates & UI blocks",
                "Collaboration tools",
                "CMS collections",
            ],
        },
        {
            name: "Premium",
            monthly: "790 rs/month",
            yearly: "7900 rs/year",
            num: "35",
            features: [
                "Everything in Basic",
                "Access to standard templates & UI blocks",
                "Collaboration tools",
                "CMS collections",
                "Basic analytics",
                "Standard integrations",
            ],
        },
        {
            name: "Enterprise",
            monthly: "Contact us",
            yearly: "Contact us",
            num: "50",
            features: [
                "Everything in Basic",
                "Access to standard templates & UI blocks",
                "Collaboration tools",
                "CMS collections",
                "Basic analytics",
                "Standard integrations",
                "Priority email support",
            ],
        },
    ];


    return (
        <>
            <Navbar />

            <div className="bg-[#F5F9FE] px-4 md:px-14 lg:px-30 pt-30 md:pt-36 lg:pt-42 pb-10 md:pb-20">
                <div className="bg-white text-[#0E1836] flex flex-col items-center shadow-2xl rounded-[20px] md:rounded-[40px] py-8 md:py-12 lg:py-20 space-y-3 md:space-y-8 lg:space-y-10 ">

                    {/* Toggle */}
                    <div className="bg-gray-200 inline-block p-1 md:p-1.5 rounded-md md:rounded-lg text-[8px] md:text-[15px]">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`py-0.5 md:py-1 px-2 md:px-4 rounded-md transition ${billingCycle === "monthly"
                                ? "bg-white shadow font-semibold"
                                : "opacity-60"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`py-0.5 md:py-1 px-2 md:px-4 rounded-md transition ${billingCycle === "yearly"
                                ? "bg-white shadow font-semibold"
                                : "opacity-60"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Pricing Plans */}
                    <div className="space-y-6 md:space-y-9 lg:space-y-10 w-[250px] md:w-[600px] lg:w-[1000px] ">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-7">
                            <div className="md:w-4/7 space-y-3 md:space-y-3 lg:space-y-5">
                                {plans.map((plan, i) => (
                                    <Pricingcomponent
                                        key={i}
                                        name={plan.name}
                                        num={plan.num}
                                        text={
                                            billingCycle === "monthly" ? plan.monthly : plan.yearly
                                        }
                                        selected={selectedIndex === i}
                                        onSelect={() => setSelectedIndex(i)}
                                    />
                                ))}
                            </div>

                            {/* Includes */}
                            <div className="md:w-3/7 border border-gray-300 rounded-2xl md:rounded-4xl p-3 md:p-6 lg:p-7 space-y-3 md:space-y-4 lg:space-y-7 ">
                                <p className="text-[10px] md:text-[18px] font-semibold ">
                                    Includes:
                                </p>
                                <div className="text-[#6F6C8F] text-[10px] md:text-[14px] space-y-2 md:space-y-5 lg:space-y-6 ">
                                    {[
                                        "Everything in Basic",
                                        "Access to standard templates & UI blocks",
                                        "Collaboration tools",
                                        "CMS collections",
                                        "Basic analytics",
                                        "Standard integrations",
                                        "Priority email support",
                                    ].map((feature, i) => {
                                        const included = plans[selectedIndex].features.includes(feature)
                                        return (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center"
                                            >
                                                <p>{feature}</p>
                                                {included ? (
                                                    <img
                                                        src={checkcircle}
                                                        className="w-3 md:w-5 h-3 md:h-5"
                                                        alt="check"
                                                    />
                                                ) : (
                                                    <div className="w-3 md:w-5 h-3 md:h-5 border border-gray-400 rounded-full"></div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="flex justify-between items-center">
                            <button className="bg-[#0E1836] text-white text-[9px] md:text-[16px] py-1 md:py-2 px-2 md:px-4 rounded-lg md:rounded-xl bg-gradient-to-b from-[#183aa1] to-[#0E1836] shadow-md">
                                Choose {plans[selectedIndex].name} Plan
                            </button>
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <p className="text-[10px] md:text-[17px] ">
                                    Enable auto-renewal
                                </p>
                                <div className="bg-[#0E1836] w-6 md:w-12 p-0.5 md:p-1 rounded-2xl">
                                    <div className="bg-white w-2 md:w-5 h-2 md:h-5 rounded-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PricingPage;

