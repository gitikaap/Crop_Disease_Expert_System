// ==========================================
// AGRIGUIDE - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// LANGUAGE TRANSLATIONS
// ==========================================

const translations = {

    en: {

        cropObservationTitle:
            "🌾 Crop Observation",

        observationSubtitle:
            "Tell us what you are seeing in the field.",

        cropLabel:
            "Crop",

        growthLabel:
            "Growth Stage",

        symptomLabel:
            "Main Symptom",

        soilLabel:
            "Soil Condition",

        weatherLabel:
            "Weather",

        irrigationLabel:
            "Irrigation",

        analyseText:
            "Analyse Crop",

        resultsTitle:
            "🧠 Expert System Results",

        resultsSubtitle:
            "Your diagnosis and recommendations will appear here."

    },


    hi: {

        cropObservationTitle:
            "🌾 फसल का निरीक्षण",

        observationSubtitle:
            "हमें बताएं कि आप खेत में क्या देख रहे हैं।",

        cropLabel:
            "फसल",

        growthLabel:
            "विकास अवस्था",

        symptomLabel:
            "मुख्य लक्षण",

        soilLabel:
            "मिट्टी की स्थिति",

        weatherLabel:
            "मौसम",

        irrigationLabel:
            "सिंचाई",

        analyseText:
            "फसल का विश्लेषण करें",

        resultsTitle:
            "🧠 विशेषज्ञ प्रणाली के परिणाम",

        resultsSubtitle:
            "आपका निदान और सुझाव यहां दिखाई देंगे।"

    },


    bn: {

        cropObservationTitle:
            "🌾 ফসল পর্যবেক্ষণ",

        observationSubtitle:
            "ক্ষেতে আপনি কী দেখছেন তা আমাদের জানান।",

        cropLabel:
            "ফসল",

        growthLabel:
            "বৃদ্ধির পর্যায়",

        symptomLabel:
            "প্রধান উপসর্গ",

        soilLabel:
            "মাটির অবস্থা",

        weatherLabel:
            "আবহাওয়া",

        irrigationLabel:
            "সেচ",

        analyseText:
            "ফসল বিশ্লেষণ করুন",

        resultsTitle:
            "🧠 বিশেষজ্ঞ সিস্টেমের ফলাফল",

        resultsSubtitle:
            "আপনার রোগ নির্ণয় এবং সুপারিশ এখানে দেখা যাবে।"

    }

};


// ==========================================
// CROP / DROPDOWN TRANSLATIONS
// ==========================================

const optionTranslations = {

    en: {

        crop: {
            tomato: "Tomato",
            rice: "Rice",
            wheat: "Wheat",
            maize: "Maize"
        },

        growth_stage: {
            seedling: "Seedling",
            vegetative: "Vegetative",
            flowering: "Flowering",
            fruiting: "Fruiting"
        },

        symptom: {
            brown_circular_spots:
                "Brown circular spots",

            diamond_leaf_spots:
                "Diamond-shaped leaf spots",

            yellowing_old_leaves:
                "Yellowing older leaves",

            yellowing_leaves:
                "Yellowing leaves",

            slow_growth:
                "Slow growth",

            wilting:
                "Wilting",

            dry_leaf_edges:
                "Dry leaf edges",

            leaf_curling:
                "Leaf curling",

            root_rot:
                "Root rot",

            sticky_leaves:
                "Sticky leaves",

            visible_small_insects:
                "Visible small insects"
        },

        soil: {
            normal: "Normal",
            low_nitrogen: "Low nitrogen",
            heavy_clay: "Heavy clay"
        },

        weather: {
            warm: "Warm",
            humid: "Humid",
            hot_dry: "Hot & Dry",
            heavy_rain: "Heavy Rain"
        },

        irrigation: {
            normal: "Normal",
            low: "Low",
            high: "High"
        }
    },


    hi: {

        crop: {
            tomato: "टमाटर",
            rice: "चावल",
            wheat: "गेहूं",
            maize: "मक्का"
        },

        growth_stage: {
            seedling: "पौध अवस्था",
            vegetative: "वानस्पतिक अवस्था",
            flowering: "फूल आने की अवस्था",
            fruiting: "फल आने की अवस्था"
        },

        symptom: {
            brown_circular_spots:
                "भूरे गोल धब्बे",

            diamond_leaf_spots:
                "हीरे के आकार के पत्तों के धब्बे",

            yellowing_old_leaves:
                "पुरानी पत्तियों का पीला होना",

            yellowing_leaves:
                "पत्तियों का पीला होना",

            slow_growth:
                "धीमी वृद्धि",

            wilting:
                "मुरझाना",

            dry_leaf_edges:
                "पत्तियों के किनारों का सूखना",

            leaf_curling:
                "पत्तियों का मुड़ना",

            root_rot:
                "जड़ सड़ना",

            sticky_leaves:
                "चिपचिपी पत्तियां",

            visible_small_insects:
                "छोटे कीड़े दिखाई देना"
        },

        soil: {
            normal: "सामान्य",
            low_nitrogen: "कम नाइट्रोजन",
            heavy_clay: "भारी चिकनी मिट्टी"
        },

        weather: {
            warm: "गर्म",
            humid: "आर्द्र",
            hot_dry: "गर्म और शुष्क",
            heavy_rain: "भारी बारिश"
        },

        irrigation: {
            normal: "सामान्य",
            low: "कम",
            high: "अधिक"
        }
    },


    bn: {

        crop: {
            tomato: "টমেটো",
            rice: "ধান",
            wheat: "গম",
            maize: "ভুট্টা"
        },

        growth_stage: {
            seedling: "চারা পর্যায়",
            vegetative: "বৃদ্ধির পর্যায়",
            flowering: "ফুল ফোটার পর্যায়",
            fruiting: "ফল ধরার পর্যায়"
        },

        symptom: {
            brown_circular_spots:
                "বাদামী গোল দাগ",

            diamond_leaf_spots:
                "হীরার আকৃতির পাতার দাগ",

            yellowing_old_leaves:
                "পুরনো পাতা হলুদ হওয়া",

            yellowing_leaves:
                "পাতা হলুদ হওয়া",

            slow_growth:
                "ধীর বৃদ্ধি",

            wilting:
                "গাছ শুকিয়ে যাওয়া",

            dry_leaf_edges:
                "পাতার কিনারা শুকিয়ে যাওয়া",

            leaf_curling:
                "পাতা কুঁকড়ে যাওয়া",

            root_rot:
                "শিকড় পচা",

            sticky_leaves:
                "আঠালো পাতা",

            visible_small_insects:
                "ছোট পোকা দেখা যাচ্ছে"
        },

        soil: {
            normal: "স্বাভাবিক",
            low_nitrogen: "কম নাইট্রোজেন",
            heavy_clay: "ভারী কাদামাটি"
        },

        weather: {
            warm: "উষ্ণ",
            humid: "আর্দ্র",
            hot_dry: "গরম ও শুষ্ক",
            heavy_rain: "ভারী বৃষ্টি"
        },

        irrigation: {
            normal: "স্বাভাবিক",
            low: "কম",
            high: "বেশি"
        }
    }

};


// ==========================================
// TRANSLATE RESULT TEXT
// ==========================================

const hindiText = {

    "The selected crop is tomato.":
        "चयनित फसल टमाटर है।",

    "The selected crop is rice.":
        "चयनित फसल चावल है।",

    "The selected crop is wheat.":
        "चयनित फसल गेहूं है।",

    "The selected crop is maize.":
        "चयनित फसल मक्का है।",

    "Brown circular spots were observed on the leaves.":
        "पत्तियों पर भूरे गोल धब्बे देखे गए हैं।",

    "Diamond-shaped spots were observed on the leaves.":
        "पत्तियों पर हीरे के आकार के धब्बे देखे गए हैं।",

    "Yellowing leaves were observed.":
        "पत्तियों का पीला होना देखा गया है।",

    "Older leaves are showing yellowing.":
        "पुरानी पत्तियां पीली हो रही हैं।",

    "Humid weather can favor fungal disease development.":
        "आर्द्र मौसम फंगल रोगों के विकास को बढ़ावा दे सकता है।",

    "Humid conditions can increase the risk of rice blast.":
        "आर्द्र परिस्थितियां राइस ब्लास्ट के जोखिम को बढ़ा सकती हैं।",

    "Humid conditions can increase the risk of some wheat diseases.":
        "आर्द्र परिस्थितियां गेहूं के कुछ रोगों का जोखिम बढ़ा सकती हैं।",

    "Humid conditions can favor fungal leaf diseases.":
        "आर्द्र परिस्थितियां फंगल पत्ती रोगों को बढ़ावा दे सकती हैं।",

    "The soil condition indicates low nitrogen.":
        "मिट्टी की स्थिति कम नाइट्रोजन को दर्शाती है।",

    "Hot and dry weather increases crop water requirements.":
        "गर्म और शुष्क मौसम फसल की पानी की आवश्यकता बढ़ाता है।",

    "Irrigation is marked as low.":
        "सिंचाई का स्तर कम है।",

    "Heavy clay soil can drain water slowly.":
        "भारी चिकनी मिट्टी में पानी धीरे-धीरे निकलता है।",

    "Heavy rainfall can increase waterlogging.":
        "भारी बारिश जलभराव को बढ़ा सकती है।",

    "High irrigation can increase excess moisture.":
        "अधिक सिंचाई से मिट्टी में अतिरिक्त नमी बढ़ सकती है।",

    "Small insects are visible on the crop.":
        "फसल पर छोटे कीड़े दिखाई दे रहे हैं।",

    "Warm conditions can support increased pest activity.":
        "गर्म परिस्थितियां कीट गतिविधि को बढ़ा सकती हैं।",

    "crop did not match.":
        "फसल मेल नहीं खाती।",

    "symptom did not match.":
        "लक्षण मेल नहीं खाते।",

    "weather did not match.":
        "मौसम मेल नहीं खाता।",

    "soil did not match.":
        "मिट्टी की स्थिति मेल नहीं खाती।",

    "irrigation did not match.":
        "सिंचाई मेल नहीं खाती।",

    "growth_stage did not match.":
        "विकास अवस्था मेल नहीं खाती।"

};


const bengaliText = {

    "The selected crop is tomato.":
        "নির্বাচিত ফসল টমেটো।",

    "The selected crop is rice.":
        "নির্বাচিত ফসল ধান।",

    "The selected crop is wheat.":
        "নির্বাচিত ফসল গম।",

    "The selected crop is maize.":
        "নির্বাচিত ফসল ভুট্টা।",

    "Brown circular spots were observed on the leaves.":
        "পাতায় বাদামী গোল দাগ দেখা গেছে।",

    "Diamond-shaped spots were observed on the leaves.":
        "পাতায় হীরার আকৃতির দাগ দেখা গেছে।",

    "Yellowing leaves were observed.":
        "পাতা হলুদ হওয়া দেখা গেছে।",

    "Older leaves are showing yellowing.":
        "পুরনো পাতা হলুদ হয়ে যাচ্ছে।",

    "Humid weather can favor fungal disease development.":
        "আর্দ্র আবহাওয়া ছত্রাকজনিত রোগের বৃদ্ধি বাড়াতে পারে।",

    "Humid conditions can increase the risk of rice blast.":
        "আর্দ্র পরিবেশ ধানের ব্লাস্ট রোগের ঝুঁকি বাড়াতে পারে।",

    "Humid conditions can increase the risk of some wheat diseases.":
        "আর্দ্র পরিবেশ কিছু গমের রোগের ঝুঁকি বাড়াতে পারে।",

    "Humid conditions can favor fungal leaf diseases.":
        "আর্দ্র পরিবেশ ছত্রাকজনিত পাতার রোগকে বাড়াতে পারে।",

    "The soil condition indicates low nitrogen.":
        "মাটির অবস্থায় কম নাইট্রোজেনের ইঙ্গিত রয়েছে।",

    "Hot and dry weather increases crop water requirements.":
        "গরম ও শুষ্ক আবহাওয়া ফসলের পানির প্রয়োজন বাড়ায়।",

    "Irrigation is marked as low.":
        "সেচের মাত্রা কম।",

    "Heavy clay soil can drain water slowly.":
        "ভারী কাদামাটিতে পানি ধীরে নিষ্কাশিত হয়।",

    "Heavy rainfall can increase waterlogging.":
        "ভারী বৃষ্টিতে জলাবদ্ধতা বাড়তে পারে।",

    "High irrigation can increase excess moisture.":
        "অতিরিক্ত সেচ মাটিতে অতিরিক্ত আর্দ্রতা বাড়াতে পারে।",

    "Small insects are visible on the crop.":
        "ফসলে ছোট পোকা দেখা যাচ্ছে।",

    "Warm conditions can support increased pest activity.":
        "উষ্ণ পরিবেশে পোকার কার্যকলাপ বাড়তে পারে।",

    "crop did not match.":
        "ফসল মেলেনি।",

    "symptom did not match.":
        "উপসর্গ মেলেনি।",

    "weather did not match.":
        "আবহাওয়া মেলেনি।",

    "soil did not match.":
        "মাটির অবস্থা মেলেনি।",

    "irrigation did not match.":
        "সেচ মেলেনি।",

    "growth_stage did not match.":
        "বৃদ্ধির পর্যায় মেলেনি।"

};


// ==========================================
// TRANSLATION HELPER
// ==========================================

function translateText(text, language) {

    if (language === "hi") {

        return hindiText[text] || text;

    }

    if (language === "bn") {

        return bengaliText[text] || text;

    }

    return text;
}


// ==========================================
// UPDATE DROPDOWN LANGUAGE
// ==========================================

function updateDropdownOptions(language) {

    const dropdowns = [
        "crop",
        "growth_stage",
        "symptom",
        "soil",
        "weather",
        "irrigation"
    ];


    dropdowns.forEach(function (dropdownId) {

        const dropdown =
            document.getElementById(dropdownId);

        if (!dropdown) {
            return;
        }


        const translationsForDropdown =
            optionTranslations[language][dropdownId];


        Array.from(
            dropdown.options
        ).forEach(function (option) {

            const value =
                option.value;


            if (
                translationsForDropdown &&
                translationsForDropdown[value]
            ) {

                option.textContent =
                    translationsForDropdown[value];

            }

        });

    });

}


// ==========================================
// UPDATE INTERFACE LANGUAGE
// ==========================================

function updateLanguage(language) {

    const selectedLanguage =
        translations[language];


    if (!selectedLanguage) {
        return;
    }


    Object.keys(
        selectedLanguage
    ).forEach(function (elementId) {

        const element =
            document.getElementById(elementId);


        if (element) {

            element.textContent =
                selectedLanguage[elementId];

        }

    });


    updateDropdownOptions(
        language
    );


    // Re-render existing results
    // if results are already visible.

    if (
        window.lastDiagnosisResults
        &&
        window.lastDiagnosisResults.length > 0
    ) {

        displayResults(
            window.lastDiagnosisResults,
            language
        );

    }

}


// ==========================================
// FORMAT CONDITION NAME
// ==========================================

function formatConditionName(condition) {

    const names = {

        crop:
            "Crop",

        symptom:
            "Symptom",

        weather:
            "Weather",

        soil:
            "Soil",

        irrigation:
            "Irrigation",

        growth_stage:
            "Growth Stage"

    };


    return (
        names[condition]
        ||
        condition
    );

}


// ==========================================
// FORMAT VALUE
// ==========================================

function formatValue(value, language) {

    if (!value) {
        return "-";
    }


    const maps =
        optionTranslations[language];


    for (
        const dropdownName in maps
    ) {

        if (
            maps[dropdownName][value]
        ) {

            return maps[dropdownName][value];

        }

    }


    return value;

}


// ==========================================
// GET RISK LEVEL
// ==========================================

function getRiskInfo(
    percentage,
    language
) {

    if (percentage >= 80) {

        if (language === "hi") {

            return {
                text: "उच्च जोखिम",
                className: "high-risk"
            };

        }

        if (language === "bn") {

            return {
                text: "উচ্চ ঝুঁকি",
                className: "high-risk"
            };

        }

        return {
            text: "High Risk",
            className: "high-risk"
        };

    }


    if (percentage >= 60) {

        if (language === "hi") {

            return {
                text: "मध्यम जोखिम",
                className: "moderate-risk"
            };

        }

        if (language === "bn") {

            return {
                text: "মাঝারি ঝুঁকি",
                className: "moderate-risk"
            };

        }

        return {
            text: "Moderate Risk",
            className: "moderate-risk"
        };

    }


    if (language === "hi") {

        return {
            text: "कम / अनिश्चित मिलान",
            className: "low-risk"
        };

    }


    if (language === "bn") {

        return {
            text: "কম / অনিশ্চিত মিল",
            className: "low-risk"
        };

    }


    return {
        text: "Low / Uncertain Match",
        className: "low-risk"
    };

}


// ==========================================
// DISPLAY RESULTS
// ==========================================

function displayResults(
    results,
    language
) {

    const resultsContainer =
        document.getElementById(
            "results"
        );


    if (!resultsContainer) {
        return;
    }


    // Save results globally so
    // language switching can re-render them.

    window.lastDiagnosisResults =
        results;


    // ======================================
    // NO RESULTS
    // ======================================

    if (
        !results ||
        results.length === 0
    ) {

        if (language === "hi") {

            resultsContainer.innerHTML = `
                <p>
                    कोई पर्याप्त नियम मिलान नहीं मिला।
                    कृपया अपने खेत की जानकारी दोबारा जांचें।
                </p>
            `;

        }

        else if (language === "bn") {

            resultsContainer.innerHTML = `
                <p>
                    পর্যাপ্ত কোনো নিয়মের মিল পাওয়া যায়নি।
                    অনুগ্রহ করে আপনার ক্ষেতের তথ্য আবার পরীক্ষা করুন।
                </p>
            `;

        }

        else {

            resultsContainer.innerHTML = `
                <p>
                    No sufficient rule match was found.
                    Please check your crop observations again.
                </p>
            `;

        }

        return;

    }


    // ======================================
    // CLEAR OLD RESULTS
    // ======================================

    resultsContainer.innerHTML = "";


    // ======================================
    // SHOW TOP 3 RESULTS
    // ======================================

    results.forEach(
        function (diagnosis) {


            const percentage =
                diagnosis.confidence;


            // ==================================
            // RISK LEVEL
            // ==================================

            const risk =
                getRiskInfo(
                    percentage,
                    language
                );


            // ==================================
            // TRANSLATE PROBLEM
            // ==================================

            let problem =
                diagnosis.problem;


            if (
                language === "hi"
            ) {

                const problemMap = {

                    "Tomato Early Blight":
                        "टमाटर अर्ली ब्लाइट",

                    "Rice Blast Risk":
                        "धान ब्लास्ट का जोखिम",

                    "Wheat Leaf Disease Risk":
                        "गेहूं पत्ती रोग का जोखिम",

                    "Maize Leaf Disease Risk":
                        "मक्का पत्ती रोग का जोखिम",

                    "Nitrogen Deficiency":
                        "नाइट्रोजन की कमी",

                    "Water Stress / Under-Irrigation":
                        "जल तनाव / कम सिंचाई",

                    "Waterlogging / Excess Moisture":
                        "जलभराव / अत्यधिक नमी",

                    "Aphid / Sap-Sucking Pest Risk":
                        "एफिड / रस चूसने वाले कीट का जोखिम"

                };


                problem =
                    problemMap[
                        diagnosis.problem
                    ]
                    ||
                    diagnosis.problem;

            }


            if (
                language === "bn"
            ) {

                const problemMap = {

                    "Tomato Early Blight":
                        "টমেটো আর্লি ব্লাইট",

                    "Rice Blast Risk":
                        "ধান ব্লাস্টের ঝুঁকি",

                    "Wheat Leaf Disease Risk":
                        "গম পাতার রোগের ঝুঁকি",

                    "Maize Leaf Disease Risk":
                        "ভুট্টা পাতার রোগের ঝুঁকি",

                    "Nitrogen Deficiency":
                        "নাইট্রোজেনের ঘাটতি",

                    "Water Stress / Under-Irrigation":
                        "জল চাপ / কম সেচ",

                    "Waterlogging / Excess Moisture":
                        "জলাবদ্ধতা / অতিরিক্ত আর্দ্রতা",

                    "Aphid / Sap-Sucking Pest Risk":
                        "এফিড / রস চোষা পোকার ঝুঁকি"

                };


                problem =
                    problemMap[
                        diagnosis.problem
                    ]
                    ||
                    diagnosis.problem;

            }


            // ==================================
            // CATEGORY
            // ==================================

            let category =
                diagnosis.category;


            if (
                language === "hi"
            ) {

                const categoryMap = {

                    "Disease":
                        "रोग",

                    "Nutrient Deficiency":
                        "पोषक तत्वों की कमी",

                    "Water Stress":
                        "जल तनाव",

                    "Pest":
                        "कीट"

                };


                category =
                    categoryMap[
                        diagnosis.category
                    ]
                    ||
                    diagnosis.category;

            }


            if (
                language === "bn"
            ) {

                const categoryMap = {

                    "Disease":
                        "রোগ",

                    "Nutrient Deficiency":
                        "পুষ্টির ঘাটতি",

                    "Water Stress":
                        "জল চাপ",

                    "Pest":
                        "পোকা"

                };


                category =
                    categoryMap[
                        diagnosis.category
                    ]
                    ||
                    diagnosis.category;

            }


            // ==================================
            // TREATMENT TITLE
            // ==================================

            let treatmentTitle =
                "Treatment";

            let preventionTitle =
                "Prevention";

            let reasoningTitle =
                "🧠 Why this result?";


            if (
                language === "hi"
            ) {

                treatmentTitle =
                    "उपचार";

                preventionTitle =
                    "रोकथाम";

                reasoningTitle =
                    "🧠 यह परिणाम क्यों?";

            }


            else if (
                language === "bn"
            ) {

                treatmentTitle =
                    "চিকিৎসা";

                preventionTitle =
                    "প্রতিরোধ";

                reasoningTitle =
                    "🧠 এই ফলাফল কেন?";

            }


            // ==================================
            // RULE MATCH TITLE
            // ==================================

            let ruleMatchTitle =
                "Rule Match";

            if (
                language === "hi"
            ) {

                ruleMatchTitle =
                    "नियम मिलान";

            }

            else if (
                language === "bn"
            ) {

                ruleMatchTitle =
                    "নিয়মের মিল";

            }


            // ==================================
            // BUILD REASONING HTML
            // ==================================

            let reasoningHTML = "";


            diagnosis.reasoning.forEach(
                function (step) {

                    const icon =
                        step.matched
                        ? "✅"
                        : "❌";


                    const conditionName =
                        formatConditionName(
                            step.condition
                        );


                    const actualValue =
                        formatValue(
                            step.actual,
                            language
                        );


                    const expectedValue =
                        formatValue(
                            step.expected,
                            language
                        );


                    let explanation =
                        step.explanation;


                    explanation =
                        translateText(
                            explanation,
                            language
                        );


                    reasoningHTML += `

                        <div class="reasoning-step">

                            <div class="reasoning-condition">

                                <span>
                                    ${icon}
                                </span>

                                <strong>
                                    ${conditionName}
                                </strong>

                            </div>


                            <div class="reasoning-values">

                                <span>
                                    ${actualValue}
                                </span>

                                <span>
                                    →
                                </span>

                                <span>
                                    ${expectedValue}
                                </span>

                            </div>

                        </div>

                        <p style="
                            margin: 5px 0 12px 0;
                            color: #66756a;
                            font-size: 13px;
                        ">

                            ${explanation}

                        </p>

                    `;

                }
            );


            // ==================================
            // TREATMENT LIST
            // ==================================

            let treatmentHTML = "";


            diagnosis.treatment.forEach(
                function (item) {

                    treatmentHTML += `
                        <li>
                            ${
                                translateText(
                                    item,
                                    language
                                )
                            }
                        </li>
                    `;

                }
            );


            // ==================================
            // PREVENTION LIST
            // ==================================

            let preventionHTML = "";


            diagnosis.prevention.forEach(
                function (item) {

                    preventionHTML += `
                        <li>
                            ${
                                translateText(
                                    item,
                                    language
                                )
                            }
                        </li>
                    `;

                }
            );


            // ==================================
            // RESULT CARD
            // ==================================

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "result-card";


            card.innerHTML = `

                <div class="result-header">

                    <div>

                        <h2>
                            🌱 ${problem}
                        </h2>

                        <p>
                            ${category}
                        </p>

                    </div>

                </div>


                <!-- MATCH + RISK -->

                <div class="result-badges">

                    <span class="match-score">

                        ${
                            language === "hi"
                            ? percentage + "% मिलान"
                            : language === "bn"
                            ? percentage + "% মিল"
                            : percentage + "% Match"
                        }

                    </span>


                    <span class="
                        risk-badge
                        ${risk.className}
                    ">

                        ${risk.text}

                    </span>

                </div>


                <!-- PROGRESS BAR -->

                <div class="progress-background">

                    <div
                        class="progress-bar"
                        style="
                            width: ${percentage}%;
                        "
                    ></div>

                </div>


                <!-- REASONING -->

                <div class="reasoning-box">

                    <h4>
                        ${reasoningTitle}
                    </h4>


                    <span class="rule-label">

                        ${ruleMatchTitle}:
                        ${diagnosis.rule_id}

                    </span>


                    ${reasoningHTML}

                </div>


                <!-- TREATMENT -->

                <div class="result-section">

                    <h4>
                        💊 ${treatmentTitle}
                    </h4>

                    <ul>

                        ${treatmentHTML}

                    </ul>

                </div>


                <!-- PREVENTION -->

                <div class="result-section">

                    <h4>
                        🛡️ ${preventionTitle}
                    </h4>

                    <ul>

                        ${preventionHTML}

                    </ul>

                </div>

            `;


            resultsContainer.appendChild(
                card
            );

        }
    );

}


// ==========================================
// DIAGNOSE BUTTON
// ==========================================

document
    .getElementById("diagnoseBtn")
    .addEventListener(
        "click",
        async function () {


            const button =
                document.getElementById(
                    "diagnoseBtn"
                );


            const language =
                document.getElementById(
                    "language"
                ).value;


            // ==================================
            // COLLECT FARMER INPUT
            // ==================================

            const data = {

                crop:
                    document.getElementById(
                        "crop"
                    ).value,

                growth_stage:
                    document.getElementById(
                        "growth_stage"
                    ).value,

                symptom:
                    document.getElementById(
                        "symptom"
                    ).value,

                soil:
                    document.getElementById(
                        "soil"
                    ).value,

                weather:
                    document.getElementById(
                        "weather"
                    ).value,

                irrigation:
                    document.getElementById(
                        "irrigation"
                    ).value

            };


            // ==================================
            // BUTTON LOADING
            // ==================================

            button.disabled = true;


            button.innerHTML = `

                ⏳

                ${
                    language === "hi"
                    ? "विश्लेषण हो रहा है..."
                    : language === "bn"
                    ? "বিশ্লেষণ হচ্ছে..."
                    : "Analysing..."

                }

            `;


            try {


                // ==================================
                // SEND DATA TO FLASK
                // ==================================

                const response =
                    await fetch(
                        "/diagnose",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify(
                                    data
                                )

                        }
                    );


                // ==================================
                // READ RESPONSE
                // ==================================

                const result =
                    await response.json();


                // ==================================
                // DISPLAY RESULTS
                // ==================================

                displayResults(
                    result.results,
                    language
                );


            }


            catch (error) {

                console.error(
                    "Diagnosis Error:",
                    error
                );


                const resultsContainer =
                    document.getElementById(
                        "results"
                    );


                resultsContainer.innerHTML = `

                    <p style="
                        color: #b83232;
                        font-weight: bold;
                    ">

                        ${
                            language === "hi"
                            ? "कुछ गलत हो गया। कृपया सर्वर जांचें।"
                            : language === "bn"
                            ? "কিছু ভুল হয়েছে। অনুগ্রহ করে সার্ভার পরীক্ষা করুন।"
                            : "Something went wrong. Please check the server."

                        }

                    </p>

                `;

            }


            finally {

                // ==================================
                // RESTORE BUTTON
                // ==================================

                button.disabled = false;


                button.innerHTML = `

                    🔍

                    <span id="analyseText">

                        ${
                            translations[
                                language
                            ].analyseText

                        }

                    </span>

                `;

            }

        }
    );


// ==========================================
// LANGUAGE CHANGE
// ==========================================

document
    .getElementById("language")
    .addEventListener(
        "change",
        function () {

            updateLanguage(
                this.value
            );

        }
    );


// ==========================================
// INITIAL LANGUAGE
// ==========================================

updateLanguage("en");