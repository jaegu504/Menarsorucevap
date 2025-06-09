// Objek untuk menyimpan semua data pertanyaan per bahasa
const allQuestionsData = {
    osmanlica: [
        // --- Kategori 1-18 Osmanlica ---
        {
            category: "1-18", originalNumber: 1, isDefinition: true,
            question: "(۱) منار هانکی علمدن بحث ایدر ؟ اصول فقهك تعريفي ندر؟",
            answer: "منار؛ اصول فقهدن بحث ايدر.\nاصول فقهك تعريفى : <span lang='ar' dir='rtl'>وَهُوَ عِلْمٌ يُعْرَفُ بِهِ أَحْوَالُ الأَدِلَّةِ وَالأَحْكَامِ الشَّرْعِيَّتَيْنِ مِنْ حَيْثُ أَنَّ لَهَا دَخْلاً فِي إِثْبَاتِ الثَّانِيَةِ بِالْأُولَى</span>\nمعناسی برنجیسی ایله ایکنجیسنی شرعی دلیللر ایله شرعی حکملری اثبات ایتمکده کندیسی ایچون تأثیر اولماسي حيثيتيله ادله شرعیه و احکام شرعيه نك حاللرى كندیسی ایله بیلینن بر علمدر."
        },
        {
            category: "1-18", originalNumber: 2, isDefinition: false,
            question: "(۲) اصول فقهك موضوعی و غایه سی ندر؟",
            answer: "موضوعی ادله شرعیه و احکام شرعیه در غایه سی سعادت دارینه نائل اولمق در."
        },
        {
            category: "1-18", originalNumber: 3, isDefinition: false,
            question: "(۳) اصول فقهك واضعی و مختصر منار کتابنك مصنفى كيمدر؟",
            answer: "واضعی امام اعظم حضرتلریدر .\nكتابك مصنفى ابن حبیب الحلبی در."
        },
        {
            category: "1-18", originalNumber: 4, isDefinition: true,
            question: "٤) أدله شرعيه قاچدر؟ و كتابك تعریفی ندر؟",
            answer: "أدله شرعيه دورتدر. ۱. کتاب ۲. سنت ۳. اجماع، ٤. قياس\nكتاب: <span lang='ar' dir='rtl'>هُوَ النَّظْمُ الْمُنْزَلُ عَلَى رَسُولِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ الْمَنْقُولُ عَنْهُ تَوَاتُرًا</span>\nمعناسی بیغمبریمز حضرت محمد صلى الله عليه و سلمه انزال اولنان بیغمبر مزدن ده بزه تواترا نقل اولنان نظمدر."
        },
        {
            category: "1-18", originalNumber: 5, isDefinition: true,
            question: "ه مباحث مشترکه نه دیمکدر و نه لردر؟",
            answer: "کتاب ایله سنت آراسنده مشترك بحثلر ديمكدر.\nبوده النظم الدال على المعنى نك اسميدر."
        },
        {
            category: "1-18", originalNumber: 6, isDefinition: false,
            question: "(٦) النظم الدال على المعنى نك قسملرى نه لردر ؟",
            answer: `<h5>وُجُوهُ النَّظِم:</h5>
            <p>۱. خاص، ٢. عام، ۳. مشترك، ٤. مؤول</p>
            <p><strong>وضوحًا (آچیقلق جهتندن):</strong> ۱. ظاهر، ٢. نص، ٣. مفسر، ٤. محكم</p>
            <p><strong>خفاء (گيزلیلك جهتندن):</strong> ۱. خفی، ٢. مشکل، ٣. مجمل، ٤. متشابه</p>
            <h5>وُجُوهُ الْإِسْتِعْمَالُ (قوللانیش جهتندن):</h5>
            <p>۱. حقيقت، ٢. مجاز، ۳. صريح، ٤. كنايه</p>
            <h5>وُجُوهُ الْوُقُوفُ (دلالت جهتندن):</h5>
            <p>۱. دَالْ بِالْعِبَارَه، ٢. دَالُ بِالْإِشَارَه، ۳. دال بِالدَّلاله، ٤. دَالُ بِالْإِقْتِضَاءِ</p>`
        },
        {
            category: "1-18", originalNumber: 7, isDefinition: true,
            question: "خاصك تعریفی و حکمی ندر؟",
            answer: "خاص: <span lang='ar' dir='rtl'>وَهُوَ مَا وُضِعَ لِمَعْنَى مَعْلُومٍ عَلَى الإِنْفِرَادِ جِنْسًا أَوْ نَوْعًا أَوْ عَيْنًا</span>\nمعناسی جنس، نوع و عين اولارق انفراد يولى اوزره معلوم بر معنا ایچون وضع اولونان لفظدر.\nحکمی بیانه احتمالى اولمقسزك مدلولنده قطعیت افاده ایتمه سیدر."
        },
        {
            category: "1-18", originalNumber: 8, isDefinition: true,
            question: "(۸) امرك تعریفی و موجبی ندر؟ امر حقنده معلومات ويريكز؟",
            answer: "امر : <span lang='ar' dir='rtl'>لَفْظُ طُلِبَ بِهِ الْفِعْلُ جَزْمًا بِوَضْعِهِ لَهُ اسْتِعْلاء</span>\nمعناسی استعلا طريقيله فعلى طلب ایچون وضع اولندیغی حالده کندیسی ایله فعل طلب اولنان لفظدر.\nامرك موجبى منع ايديلد كدن صکره و يا منع ایدیلمه دن اوکجه وجوب افاده ايدر.\nامر خاص دندر وجوب افاده ایدن صیغه یه مخصوصدر فعل رسول وجوب افاده ايتمز."
        },
        {
            category: "1-18", originalNumber: 9, isDefinition: true,
            question: "(۹) امرك حكمى قاچ قسمدر؟ تعریف ایدیکز؟",
            answer: "امرك حكمى ايكى قسمدر.\n1 - أدا: <span lang='ar' dir='rtl'>وَهُوَ إِقَامَةُ الْوَاجِبِ بِعَيْنِهِ</span> معناسی؛ امرله واجب اولانك عيننى يرينه كتير مكدر .\n۲ - قضا: <span lang='ar' dir='rtl'>تَسْلِيمُ مِثْلِ الْوَاجِبِ بِالْأَمْرِ</span> معناسی؛ امرله واجب اولانك مثلنى يرينه كتير مكدر ."
        },
        {
            category: "1-18", originalNumber: 10, isDefinition: false,
            question: "(۱۰) أدا قاچ قسمدر؟ ایضاح ایدیکز؟",
            answer: "أدا اوچ قسمدر : ۱ - اداي کامل { جماعتله نماز کبی }\n۲ - اداي قاصر { منفردا نماز کبی }\n- ادا شبيه بالقضاء { لاحقك نمازى كبي }"
        },
        {
            category: "1-18", originalNumber: 11, isDefinition: false,
            question: "(۱۱) قضا قاچ قسمدر؟ ایضاح ايديكز؟",
            answer: "قضا اوچ قسمدر : ۱ - قضا بمثل معقول { اوروجی اوروج ایله قضا کبی }\n۲ - قضا بمثل غير معقول { اوروج ایچون فدیه کبی}\n- قضا بمعنى الاداء { بایرام نمازنده کی زوائد تکبیر لرینی رکوعده آلمق کبی }"
        },
        {
            category: "1-18", originalNumber: 12, isDefinition: false,
            question: "(۱۲) حسنك قسملری نه لردر؟ برر مثال ایله سویله یکز.",
            answer: "حسن ایکی قسمدر؛ ۱ حسن المعنى في عينه ... ۲ حسن المعنى في غيره\nحسن المعنى في عينه ايكى قسمدر ؛\n۱. حسن المعنى في وضعه { ایمان و نماز کبی\n. حسن المعنى في وضعه يه ملحق، حسن المعنى في غيره يه مشابه اوروج و زکات } کبی\nحسن المعنى في غيره ایکی قسمدر ؛\n۱. مأمور بهك اداسى ايله غير اذا اولور ( جهاد کبی\n۲. مأمور بهك اداسی ایله غير اداء اولونمز آبدست کبی هر ایکیسينك حكملری بردر"
        },
        {
            category: "1-18", originalNumber: 13, isDefinition: false,
            question: "(۱۳) وقت اعتباری ایله امر قاچ قسمدر؟",
            answer: "وقت اعتباری ایله امر ایکی قسمدر؛\n۱ وقتدن مطلق اولور بودا فوری عجله بی ایجاب ايتمز زکات کبی}\nوقت ایله مقید اولور."
        },
        {
            category: "1-18", originalNumber: 14, isDefinition: false,
            question: "(١٤) وقت ایله مقید اولان امر لرك قسملری و مثاللری نه لردر؟",
            answer: "وقت ایله مقید اولان امر ٤ قسمدر؛\n۱. وقت مؤدی ایچون ظرف اداسی ایچون شرط وجوبی ایچون سببدر نماز وقتی کی\nحکمی نیتده تعیین شرط در وقتك دار اولماسی سببی ایله نیتی تعیین دوشمز وقت آنجق ادا ایله تعیین اولور.\n۲. وقت مؤدی ایچون معیار وجوبی ایچون سببدر رمضان شریف آبی کبی\nحكمي : او وقتده مؤدى نك غيريسني نفى ايتمه سيدر مطلق اسمله و وصفده کی خطا ایله ادا اولونور .\n۳. وقت مؤدی ایچون سادجه معیار اولور رمضان شريفك قضاسي } كبي\nحکمی: کندیسنده تعيين شرطدر وقتك كچمه یه احتمالی یوقدر.\n٤. - وقت مشکل اولور حج وقتی کبی\nحکمی حج آیلرنده نیتده تعيينك شرط اولماسيدر ."
        },
        {
            category: "1-18", originalNumber: 15, isDefinition: false,
            question: "(١٥) کافرلر نه ایله مأمور در نه ایله مأمور دکلدرلر؟",
            answer: "کفار (كافرلر)؛ فقهانك اجماعی ایله ماضیده کی عهد لرينه بناء ايمان ايله مخاطبدرلر، سقوطه احتمالی اولان نماز و اوروج کبی) عبادتلری ادا ایله مخاطب دكلدرلر."
        },
        {
            category: "1-18", originalNumber: 16, isDefinition: true,
            question: "(١٦) نهيك تعريفي ندر؟",
            answer: "ني: <span lang='ar' dir='rtl'>لَفْظُ طُلِبَ بِهِ الْكَفُّ جَزْمًا بِوَضْعِهِ لَهُ اسْتِعْلَاءً.</span>\nمعناسی استعلا طريقيله فعلى ترك ايچون وضع اولندیغی حالده كنديسي ايله فعلك تركى طلب اولنان لفظدر ."
        },
        {
            category: "1-18", originalNumber: 17, isDefinition: false,
            question: "(۱۷) نهی، قبح صفتنده قاچ قسمدر؟ برر مثال ویریکز؟",
            answer: "نهی؛ قبح صفتنده ایکی قسمدر :\n۱ . قبح المعنى في عينه : ١ . وضعا اولور .{ كفر } کبی\n٢. شرعًا اولور { حر کیمسه بی صاتمق کبی\n. قبح المعنى فى غيره : ۱ . وصفا اولور ( ايام منهیه ده اوروج } کبی\n٢. مجاورا اولور ( جمعه کونی اذان اوقونوركن بيع (آلیش ویریش) کبی"
        },
        {
            category: "1-18", originalNumber: 18, isDefinition: true,
            question: "(۱۸) عامك تعريفي و حکمنی سویله یکز عام خاصی نسخ ایدر می؟",
            answer: "تعریفى: <span lang='ar' dir='rtl'>وَهُوَ مَا تَنَاوَلَ أَفْرَادًا مُتَّفِقَةَ الْحُدُودِ عَلَى سَبِيلِ الشُّمُولِ</span>\nمعناسی شمول یولی اوزره حقیقتلری متفق فرداره شامل اولان لفظدر.\nحکمی شامل اولدیغی فرد لرده قطعی اولارق حکمی اثبات ایتمکدر.\nعام ايله خاصك حكمني نسخ جائزدر."
        },
        // Kategori 19-36 Osmanlica
        {
            category: "19-36", originalNumber: 19, isDefinition: true,
            question: "(۱۹) مشتركك تعریفی و حکمنی سویله یکز؟",
            answer: "تعريفي: <span lang='ar' dir='rtl'>وَهُوَ مَا تَنَاوَلَ أَفْرَادًا مُخْتَلِفَةَ الْخُدُودِ بِالْبَدَلِ</span>\nمعناسی بدل طریقی ایله تعریفلری مختلف فرداره شامل اولان لفظدر.\nحکمی کندیسی ایله عمل ايتمك ايچون مشتركك وجهلرندن بعضیسنی ترجیح ایچون تأملدر.\n(کندیسنده دوشونمکدر .)"
        },
        {
            category: "19-36", originalNumber: 20, isDefinition: true,
            question: "(۲۰) مؤولك تعريفي و حکمنی سویله یکز؟",
            answer: "تعریفى: <span lang='ar' dir='rtl'>وَهُوَ مَا تُرْجِحَ مِنَ الْمُشْتَرَكِ بَعْضُ وُجُوهِهِ بِغَالِبِ الرَّأْي</span>\nمعناسی : ظن غالب ايله مشتركك وجهلرندن بعضیسی ترجیح اولناندر.\nحکمی غلط (خطا) احتمالی اوزره کندیسی ایله عمل ایتمکدر."
        },
        {
            category: "19-36", originalNumber: 21, isDefinition: true,
            question: "(۲۱) ظاهرك تعريفي و حکمنی سویله یکز؟",
            answer: "تعریفی : <span lang='ar' dir='rtl'>وَهُوَ مَا ظَهَرَ الْمُرَادُ مِنْهُ بِصِيغَتِهِ.</span>\nمعناسی لفظك مجرد صيغه سنى ايشتمکله کندیسندن مراد اولونان معنا ظاهر اولاندر.\nحکمی: کندیسندن ظاهر اولان معنا ايله عملك واجب اولماسيدر."
        },
        {
            category: "19-36", originalNumber: 22, isDefinition: true,
            question: "(۲۲) نصك تعريفي و حکمنی سویله یکز؟",
            answer: "تعريفي: <span lang='ar' dir='rtl'>وَهُوَ مَا زَادَ وُضُوحًا عَلَى الظَّاهِرِ بِمَعْنَى مِنَ الْمُتَكَلِّمِ</span>\nمعناسی متکلم طرفندن اولان بر معنا سببی ایله ظاهر اوزرینه آچیقلق جهتندن زیاده اولاندر .\nحکمی مجاز تأويلنه احتمالی اولمقله برابر آچیقجه اکلاشیلان معنا ایله عملك واجب اولماسيدر."
        },
        {
            category: "19-36", originalNumber: 23, isDefinition: true,
            question: "(۲۳) مفسرك تعریفی و حکمنی سویله یکز؟",
            answer: "تعريفي: <span lang='ar' dir='rtl'>وَهُوَ مَا زَادَ وُضُوحًا عَلَى النَّصِ مِنْ غَيْرِ احْتِمَالِ تَأْوِيلٍ</span>\nمعناسى تأويله احتمالی اولمقسزك نص اوزرینه آچیقلق جهتندن زیاده اولاندر .\nحکمی نسخه احتمالی اولمقله برابر کندیسی ایله عملك واجب اولماسيدر."
        },
        {
            category: "19-36", originalNumber: 24, isDefinition: true,
            question: "(٢٤) محكمك تعریفی و حکمنی سویله یکز؟",
            answer: "تعریفى : <span lang='ar' dir='rtl'>وَهُوَ مَا أَحْكِمَ الْمُرَادُ بِهِ عَنِ احْتِمَالِ النَّسْخِ وَ التَّبْدِيلِ</span>\nمعناسی نسخ و تبدیل احتمالی اولمقسزك كنديسي ايله متكلمك مرادي محكم قيليناندر .\nحکمی تاویل ، تخصیص و نسخه احتمالى اولمقسزك كنديسي ايله عملك واجب اولماسيدر."
        },
        {
            category: "19-36", originalNumber: 25, isDefinition: true,
            question: "(٢٥) خفى نك تعريفي و حکمنی سویله یکز؟",
            answer: "تعريفي: <span lang='ar' dir='rtl'>وَهُوَ مَا خَفِيَ الْمُرَادُ بِهِ بِعَارِضٍ تَحْتَاجُ إِلَى الطَّلَبِ</span>\nمعناسی طلبه محتاج اولان بر عارض سببی ایله متكلمك مرادى كيزلى اولاندر .\nحكمي: معنانك كيزلى اولماسی زیاده لکدن می یوقسه نقصانلقدن می اولدیغنی اظهار ايتمك ايچون خفى اولان لفظه باقمقدر."
        },
        {
            category: "19-36", originalNumber: 26, isDefinition: true,
            question: "(٢٦) مشكلك تعريفي و حکمنی سویله یکز؟",
            answer: "تعريفي: <span lang='ar' dir='rtl'>وَهُوَ مَا فَوْقَ الخَفِي لِاحْتِيَاجِ الطَّلَبِ وَ التَّأَمُّلِ</span>\nمعناسی طلب و تأمله (دوشونمه یه محتاج اولديغي ايچون كيز ليلكده خفينك فوقنده اولان لفظدر .\nحکمی طلب و تأمل ايله متكلمك مرادی بیان اولوننجه به قدر مراد اولونان معنانك حق اولديغنه اينانمقدر."
        },
        {
            category: "19-36", originalNumber: 27, isDefinition: true,
            question: "(۲۷) مجملك تعريفي و حکمنی سویله یکز؟",
            answer: "تعريفي: <span lang='ar' dir='rtl'>وَهُوَ مَا اشْتَبَهَ مُرَادُهُ فَاحْتَاجَ إِلَى الاسْتِفْسَارِ</span>\nمعناسی: متكلمك مرادى قاريشوب تفسيره محتاج اولاندر .\nحکمی: مجمل (حضرت الله و رسولی طرفندن مراد اولنان معنا بیان ایدیلنجه به قدر بكله مکدر. "
        },
        {
            category: "19-36", originalNumber: 28, isDefinition: true,
            question: "(۲۸) متشابهك تعريفي و حکمنی سویله یکز؟",
            answer: "تعريفي : <span lang='ar' dir='rtl'>وَهُوَ مَا لَمْ يُرْجَ بَيَانُ مُرَادِهِ لِشِدَّةِ خَفَائِهِ</span>\nمعناسی کیز لیلکی شدتلی اولدیغی ایچون مراد اولونان معنانك بياني اميد اولونماياندر .\nحکمی مراد اولونان معنانك حقيتنه اعتقاد ایتمکله برابر کندیسنده توقفدر (بكله مکدر .)"
        },
        {
            category: "19-36", originalNumber: 29, isDefinition: true,
            question: "(۲۹) حقیقت و مجازك تعريفلری و حکملری نه لردر ؟",
            answer: "حقیقت: <span lang='ar' dir='rtl'>وَهِيَ اسْمٌ لِمَا أُرِيدَ بِهِ مَا وُضِعَ لَهُ</span> معناسی وضع اولوندیغی معنا کندیسی ایله مراد اولونان لفظك اسميدر.\nمجاز: <span lang='ar' dir='rtl'>وَهِيَ اسْمٌ لِمَا أُرِيدَ بِهِ غَيْرُ مَا وُضِعَ لَهُ</span> معناسی وضع اولونديغي معنانك غيریسی کندیسی ايله مراد اولونان لفظك اسميدر.\nحکماری حقیقت و مجازك بر لفظده مرادينك ممكن اولما مسيدر حقیقت ایله عمل ممکن اولدیغی زمان مجاز دوشر."
        },
        {
            category: "19-36", originalNumber: 30, isDefinition: false,
            question: "(۳۰) حقیقی معنادن مجازی معنایه نه زمان كيديلر؟ حقيقتك ترك ايديلوب مجازه كیدلدیکی یرلر نه لردر ؟",
            answer: "حقيقي معنا عذر لنديكي عادةً و يا شرعًا ترك ايديلديكى زمان مجازی معنایه کیدیلر.\nحقيقتك ترك ايديلوب مجازه کیدیلدیکی یرلر ؛\n. عادتك دلالتی ايله\n• محل كلامك دلالتي ايله\n• متکلمه رجوع ايدن معنانك دلالتي ايله\n• سياق نظمك دلالتی ايله\n. بالذات لفظك دلالتي ايله"
        },
        {
            category: "19-36", originalNumber: 31, isDefinition: true,
            question: "(۳۱) صريحك تعريفي و حکمنی سویله یکز؟",
            answer: "صريح : <span lang='ar' dir='rtl'>مَا ظَهَرَ مُرَادُهُ بَيِّنًا</span>\nمعناسی: آچیقلق جهتندن متكلمك مرادى ظاهر اولاندر.\nحكمي: نيته محتاج اولمقسزك موجبنك ثابت اولماسيدر."
        },
        {
            category: "19-36", originalNumber: 32, isDefinition: true,
            question: "(۳۲) كنايه نك تعريفي و حکمنی سویله یکز؟",
            answer: "كنايه : <span lang='ar' dir='rtl'>مَا لَمْ يَظْهَرِ الْمُرَادُ بِهِ إِلَّا بِقَرِينَةٍ.</span>\nمعناسی: متكلمك مرادی آنجق قرینه ایله ظاهر اولاندر .\nحکمی آنجق بيت و يا بيت مقامنه قائم اولان بر شیله عملك واجب اولماسيدر ."
        },
        {
            category: "19-36", originalNumber: 33, isDefinition: true,
            question: "(۳۳) دال بالعباره نك تعريفي و حکمنی سویله یکز؟",
            answer: "دال بالعباره: <span lang='ar' dir='rtl'>وَهُوَ الْعَمَلُ بِظَاهِرِ مَا سِيقَ الْكَلَامُ لَهُ.</span>\nمعناسي : كلامك كندیسی ایچون سوق اولونديغي شيئك ظاهری ایله عمل ایتمکدر .\nحکمی قطعیت افاده ایدر"
        },
        {
            category: "19-36", originalNumber: 34, isDefinition: true,
            question: "(٣٤) دال بالاشاره نك تعريفي و حکمنی سویله یکز؟",
            answer: "دال بالاشاره: <span lang='ar' dir='rtl'>وَهُوَ الْعَمَلُ بِمَا ثَبَتَ بِنَظْمِهِ لُغَةً.</span>\nمعناسی: لغت جهتندن لفظك نظمى ايله ثابت اولان شی ایله عمل ایتمکدر.\nحکمی: قطعیت افاده ایدر"
        },
        {
            category: "19-36", originalNumber: 35, isDefinition: true,
            question: "(٣٥) دال بالدلاله نك تعريفي و حکمنی سویله یکز؟",
            answer: "دال بالدلاله: <span lang='ar' dir='rtl'>وَهُوَ مَا ثَبَتَ بِمَعْنَاهُ لُغَةً</span>\nمعناسی لغةً لفظك معناسى ايله ثابت اولان حكمدر.\nحکمی قطعیت افاده ایدر"
        },
        {
            category: "19-36", originalNumber: 36, isDefinition: true,
            question: "(٣٦) دال بالاقتضانك تعريفني سويله يكز ؟",
            answer: "دال بالاقتضاء : <span lang='ar' dir='rtl'>مَا لَمْ يُعْمَل النَّصُ إِلَّا بِشَرْطِ تَقَدُّمِهِ عَلَيْهِ.</span>\nمعناسی: آنجق اوزرینه تقدم شرطى ايله نصك عمل اولونديغي حكمدر."
        },
        // Kategori 37-54 Osmanlica
        {
            category: "37-54", originalNumber: 37, isDefinition: false,
            question: "(۳۷) دلالتلر آراسنده تعارض واقع اولورسه حکم ندر؟",
            answer: "دال بالعباره ایله دال بالاشاره آراسنده تعارض اولورسه دال بالعباره ترجيح اولونور .\nدال بالاشاره ایله دال بالدلاله آراسنده تعارض اولورسه دال بالاشاره ترجیح اولونور.\nدال بالدلاله ایله دال بالاقتضی آراسنده تعارض اولورسه دال بالدلاله ترجيح اولونور ."
        },
        {
            category: "37-54", originalNumber: 38, isDefinition: true,
            question: "(۳۸) مشروعات قاچ قسمدر؟ عزیمت و رخصتك تعريفي ندر؟",
            answer: "مشروعات ایکی قسمدر. ۱. عزیمت ۲ رخصت\nعزيمت: قوللرك عذر لرينه مبنى اولمقسيزك ابتداءً مشروع قيلينان شيدر.\nرخصت: <span lang='ar' dir='rtl'>وَهِيَ مَا تَغَيَّرَ مِنْ عُسْرٍ لِيُسْرِ بِعُذْرٍ</span>\nمعناسی عذر سببی ايله زور لقدن قولا يلغه دكيشن حكمدر."
        },
        {
            category: "37-54", originalNumber: 39, isDefinition: true,
            question: "(۳۹) عزيمت قاچ قسمدر ؟ فرضك تعریفی و حکمی ندر؟",
            answer: "عزیمت دورت قسمدر فرض واجب، سنت، نافله\nفرض : <span lang='ar' dir='rtl'>وَهُوَ مَا ثَبَتَ بِدَلِيلٍ قَطْعِيَ لَا شُبْهَةَ فِيهِ</span>\nمعناسی کندیسنده شبهه اولمایان قطعی دلیل ایله ثابت اولاندر\nحکمی: قلب ايله تصديق بدن ایله عمل جهتندن لزومدر فرضیتینی انکار ایدن کافر اولور عذرسز ترك ايدن فاسق اولور ."
        },
        {
            category: "37-54", originalNumber: 40, isDefinition: true,
            question: "٤٠) واجبك تعریفی و حکمی ندر؟",
            answer: "واجب : <span lang='ar' dir='rtl'>وَهُوَ مَا ثَبَتَ بِدَلِيلٍ فِيهِ شُبْهَةٌ.</span>\nمعناسی کندیسنده (دلالتنده) شبهه اولان دلیل ایله ثابت اولاندر.\nحکمی: فرض منزلنده عمل جهتندن لزومدر."
        },
        {
            category: "37-54", originalNumber: 41, isDefinition: true,
            question: "(٤١) سنتك تعریفی و حکمی ندر؟",
            answer: "سنت: <span lang='ar' dir='rtl'>وَهِيَ الطَّرِيقَةُ الْمَسْلُوكَةُ فِي الدِّينِ.</span>\nمعناسی دینده کیدیلن یولدر\nحکمی فرض و واجب اولمقسزك يرينه كتیر یلمه سی طلب اولونور."
        },
        {
            category: "37-54", originalNumber: 42, isDefinition: true,
            question: "٤٢ ) نافله نك تعریفی و حکمی ندر؟",
            answer: "نافله : <span lang='ar' dir='rtl'>وَهُوَ مَا زَادَ عَلَى الْعِبَادَاتِ.</span>\nمعناسی عبادتلر اوزرینه زیاده قیلیناندر.\nحكمي : فاعلنك ثوابلانماسى ترك ايدنك عذا بلانما مسيدر باشلامق سببي ايله واجب اولور."
        },
        {
            category: "37-54", originalNumber: 43, isDefinition: true,
            question: "(٤٣) مباحك تعريفي ندر ؟",
            answer: "مباح: <span lang='ar' dir='rtl'>وَهُوَ مَا لَيْسَ لِفِعْلِهِ ثَوَابٌ وَلَا لِتَرْكِهِ عِقَابٌ.</span>\nمعناسی فاعلی ایچون فعلینده ثواب اولمیان ترك ايدن ايچون ترکینده کناه اولمایان شیدر ."
        },
        {
            category: "37-54", originalNumber: 44, isDefinition: false,
            question: "٤٤) احکام مشروعه نك سببلرى نه لردر ؟",
            answer: "ايمانك وجوبنك سببي؛ عالمك حادث اولماسيدر.\nنمازك سببي؛ وقتدر .\nزكاتك سببي؛ نصاب مقدارى ماله مالك اولمقدر .\nاوروجك سببي؛ رمضان شریف کونلریدر .\nصدقه فطرك سببي؛ باقمقله يوكوملی اولدیغی کیمسه لردر\nحجك سببي؛ بيت الله در.\nعشر و خراجك سببي؛ حقيقةً ويا تقدیرا نامی اوره ین - چوغالان ارضك اولماسی در .\nآبدستك سببي؛ نماز در."
        },
        {
            category: "37-54", originalNumber: 45, isDefinition: true,
            question: "(٤٥) سنتك تعريفي و قسملری نه لردر ؟",
            answer: "سنت : <span lang='ar' dir='rtl'>وَهِيَ الْمَرْوِيُّ عَنْ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَوْلًا وَ فِعْلًا وَ تَقْرِيرًا</span>\nمعناسی پیغمبریمز محمد مصطفى صلى الله عليه وسلم دن قولا فعلا و تقریرا روایت اولوناندر\nقولى سنت: حديث شريفلر\nفعلی سنت ایشله دیکی شیلر مسواك قوللانمق كي.\nتقریری سنت باشقه سی یا پدیغنده منع ایتمه يوب سکوت ایتدیکی شیلردر ."
        },
        {
            category: "37-54", originalNumber: 46, isDefinition: false,
            question: "(٤٦) قولى سنتك قسملری قاچدر؟ کیفیت اتصال قاچ شکلده اولور؟",
            answer: "قولى سنتك قسملرى دورتدر ۱ - کیفیت اتصال ٢ - کیفیت انقطاع منقطع) - محل خبر ٤ - نفس خبر\nکیفیت اتصال؛ اوچ شکلده اولور : ۱. خبر متواتر، ٢. خبر مشهور ۳. خبر آحاد"
        },
        {
            category: "37-54", originalNumber: 47, isDefinition: true,
            question: "(٤٧) خبر متواترك تعریفی ندر؟",
            answer: "خبر متواتر : <span lang='ar' dir='rtl'>وَهُوَ الْكَامِلُ الَّذِي رَوَاهُ قَوْمٌ لَا يُحْصى عَدَدُهُمْ وَلَا يُتَوَهَّمُ تَوَاطُتُهُمْ عَلَى الْكِذْبِ</span>\nمعناسی کذب اوزرینه اتفاقلری دوشونولمه ین و عددلری صاییلامايان قومك روايت ایتدیکی کامل بر خبردر ."
        },
        {
            category: "37-54", originalNumber: 48, isDefinition: false,
            question: "(٤٨) خبر مشهور و خبر آحاد ندر؟",
            answer: "خبر مشهور : بزه اولا شمسنده صورةً شبهه اولاندر بوده فردلردن یا بیلوب ایکنجی و او چنجی عصرده متواتر منزله سنه اولاشان خبر در .\nخبر آحاد : بزه اولا شما سنده صورة و معنى شبهه اولان خبر در ."
        },
        {
            category: "37-54", originalNumber: 49, isDefinition: false,
            question: "(٤٩) كيفيت انقطاع قاچ قسمدر سویله یکز؟",
            answer: "ایکی قسمدر : ۱ . ظاهر اولور. ۲. باطن اولور\nظاهرده مرسلدر که دورت قسمدر؛\n۱ - صحابه كرامك مرسلی اجماع ایله دلیلدر .\n۲ - قرن ثانی (تابعين) و ثالثك (تبع تابعين مرسلی حنفی مذهبی عندنده دلیلدر. (حُجَّتْ در)\n۳ - هر عصرده کی عادل کیمسه لرك مرسلی امام کرخی عندنده دلیلدر .\n٤ - من وجه مرسل من وجه مسند مرسلی قبول ایدن عندنده مقبولدر"
        },
        {
            category: "37-54", originalNumber: 50, isDefinition: false,
            question: "(٥٠) باطنا منقطع اولان حدیث شریف قاچ قسمدر ؟",
            answer: "ایکی قسمدر:\n۱ - یا ناقلده کی بر نقصانلقدن دولایی اولور. یعنی راویده آرانان شرطلر (عقل اسلام ضبط عدالت) بولو نمادیغی ایچون.\n۲- یاده کندیسندن دها قوتلی بر دلیله معارضه سببی ایله اولور ."
        },
        {
            category: "37-54", originalNumber: 51, isDefinition: false,
            question: "(٥١) محل خبر قاچدر ؟ حقوق الله ندر ايضاح ايديكز؟",
            answer: "ایکی قسمدر : ۱ - حقوق الله اولور . ٢ - حقوق العباد اولور.\nحقوق الله عبادات (صلاة زكات کبی و عقوبات (حد) زنا، حد قذف کبی) اولور."
        },
        {
            category: "37-54", originalNumber: 52, isDefinition: false,
            question: "(٥٢) حقوق العباد قاچ قسمدر ایضاح ایدیکز؟",
            answer: "حقوق العباد\n۱ - كنديسنده ساده جه إلزام اولان بيع كبي.\n۲ - کندیسنده اصلا إلزام اولمايان: وكالت کی بو قسم خبر واحد ایله ده ثابت اولور.\n۳ - من وجه الزام اولان من وجه الزام اولمايان وكيلى عزل کبی امام اعظم حضرتلرینه کوره بو قسمده عدد و عدالت شرط قيلينور."
        },
        {
            category: "37-54", originalNumber: 53, isDefinition: false,
            question: "(٥٣) نفس خبرك قسملرینی مثاللرینی و حکملرینی ایضاح ایدیکز؟",
            answer: "دورت قسمدر :\n۱ - صدقی معلوم (واجب) اولان { رسوللرك خبرى كبي } حکمی حق اولديغنه اعتقاد ایدوب اونكله عمل ايتمكدر.\n۲ - كذبي معلوم (واجب) اولان { فرعونك ربوبيت دعواسي كبي } حکمی باطل اولديغنه اعتقاد ايتمكدر.\n۳ - بلا ترجیح صدقه و کذبه احتمالی اولان { فاسقك خبرى كبي } حکمی: کندیسنده توققدر. (بكله مکدر)\n٤ - صدقی، کذبی اوزرینه ترجیح ایدیلن شرطلرینی جامع عادل كيمسه نك خبرى كبي} حکمی: حق اولديغنه اعتقاد ايتمكسزك كندیسی ایله عمل ایتمکدر."
        },
        {
            category: "37-54", originalNumber: 54, isDefinition: false,
            question: "(٥٤) دلیللر آراسنده تعارض واقع اولدیغی زمان حکم نه در؟",
            answer: "ایکی آیت آراسنده تعارض واقع اولدیغی زمان سنته کيديلير.\nایکی سنت آراسنده تعارض واقع اولديغی زمان صحابه نك قولنه صحابه نك قولى بولو نمازسه قياسه كيديلير.\nایکی قیاس آراسنده تعارض واقع اولدیغی زمان ترجیح ممکن ایسه اونكله عمل اولنور.\nقیاسلر آراسنده ترجیح ممكن اولمازسه مجتهد قلبينك شهاده تيله عمل ايدر."
        },
        // Kategori 55-72 Osmanlica
        {
            category: "55-72", originalNumber: 55, isDefinition: true,
            question: "(٥٥) بیانات خمسى صاييكز و بیان تقريرك تعريفي سويله يكز ؟",
            answer: "ه قسمدر : ۱ - بیان تقریر ۲ - بیان تفسير ۳ - بیان تغییر ٤ - بیان ضرورت ه - بیان تبدیل\nبيان تقرير : <span lang='ar' dir='rtl'>هُوَ تَوْكِيدُ الْكَلَامِ بِمَا يَقْطَعُ احْتِمَالَ الْمَجَازِ أَوِ الْخُصُوصِ</span>\nمعناسی مجاز و خصوص احتمالنی اور تادن قالدیرن شی ایله کلامی تاکید ایتمکدر."
        },
        {
            category: "55-72", originalNumber: 56, isDefinition: true,
            question: "(٥٦) بيان تفسير و بيان تغييرك تعريفلرى نه لردر ؟",
            answer: "بیان تفسير : <span lang='ar' dir='rtl'>وَهُوَ بَيَانُ الْمُجْمَلِ</span> معناسی مجملی بیان ایتمکدر\nبيان تغيير : <span lang='ar' dir='rtl'>وَهُوَ التَّعْلِيقُ بِالشَّرْطِ وَالْإِسْتِثْنَاءِ</span> معناسی حکمی شرطه و استثنايه باغلامقدر."
        },
        {
            category: "55-72", originalNumber: 57, isDefinition: true,
            question: "(٥٧) بیان ضرورت و بیان تبديلك تعريفلرى نه لردر ؟",
            answer: "بیان ضرورت: <span lang='ar' dir='rtl'>وَهُوَ نَوْعُ بَيَانٍ يَقَعُ بِمَا لَمْ يُوضَعْ لَهُ</span> معناسی بیان ایچون وضع اولنمایان بر شیئ ایله واقع اولان بیاندر .\nبيان تبديل: <span lang='ar' dir='rtl'>وَهُوَ النَّسْخُ</span> معناسی نسخ ایتمکدر (حکمی قالدر مقدر)"
        },
        {
            category: "55-72", originalNumber: 58, isDefinition: false,
            question: "(٥٨) نسخك جريان ايتديكي یرلری سویله یکز؟ قیاس و اجماع ناسخ اولور می؟",
            answer: "کتاب و سنتدن هر بررلرينك ديگری ایله نسخی جائز در.\nنسخ دورت پرده جریان ایدر : ۱. کتاب ایله کتاب . ٢. کتاب ایله سنت ٣. سنت ایله سنت ٤ . سنت ایله کتاب\nخایر قیاس و اجماع ناسخ دکلدر"
        },
        {
            category: "55-72", originalNumber: 59, isDefinition: false,
            question: "(٥٩) کتابدن منسوخ اولانلر نه لردر ؟",
            answer: "تلاوت و حکمی منسوخدر.\nحکمی باقی، تلاوتی منسوخدر\nتلاوتی باقی، حکمی منسوخدر.\nساده جه حكمك وصفى منسوخدر"
        },
        {
            category: "55-72", originalNumber: 60, isDefinition: false,
            question: "(٦٠) افعال نبي حقنده معلومات ويريكز.",
            answer: "اگر رسول الله افندي مزدن واقع اولان فعللرك هانكي وجه اوزرینه واقع اولدیغی بیلینیرسه { فرض واجب ، سنت، مباح } واقع اولدیغی کبی کندیسنه اویولور اگر وصفی بیلین مزسه مباح اولارق اوكا اويولور."
        },
        {
            category: "55-72", originalNumber: 61, isDefinition: false,
            question: "(٦١) شرائع من قبلنا ايله عمل ايتمك نه زمان واجب اولور؟ دلیلی نه در؟",
            answer: "حضرت الله (جل جلاله و رسولی (صلى الله عليه وسلم انكار ايتمكسزك بزه قصه ایتد کلری ،زمان رسول الله افندیمز ایچون شریعت اولمقله بزه عمل واجب اولور ."
        },
        {
            category: "55-72", originalNumber: 62, isDefinition: false,
            question: "(٦٢) صحابه کرامی و تابعینی تقلید حقنده معلومات ويريكز؟",
            answer: "صحابه کرامی تقلید واجبدر و بونكله قياس ترك ايديلير.\nتابعيندن فتواسی صحابه زماننده ظاهر اولانلری تقلید جائزدر ) حسن بصری رحمة الله عليه کی)"
        },
        {
            category: "55-72", originalNumber: 63, isDefinition: false,
            question: "(٦٣) اجماعك مرتبه لری قاچدر و نه لردر؟",
            answer: "اوچدر\n1 - تمامی وفات ایتدیکی زمان صحابه كرامك اجتماعی بو آیت کریمه کبیدر، منکری کافر اولور.\n۲ - صحابه كرامك اختلاف ایتمه دیکی بر مسئله ده تابعينك اجماعی بو خبر مشهور كبیدر، منكرى مضل اولور.\n- صحابه كرامك اختلاف ایتدیکی مسئله لرده تابعينك اجماعی بو خبر آحاد کبیدر منکری کافرده اولماز مضل ده اولماز."
        },
        {
            category: "55-72", originalNumber: 64, isDefinition: false,
            question: "(٦٤) قياسك شرطلرى نه لردر ؟",
            answer: "قياسك شرطلری\n۱. اصل مقيس عليه كندى حكمنه مخصوص اولما يا جقدر.\n. اصل قیاسدن معدول اولما ما سيدر ( قياس و قاعده یه مخالف اولارق ثابت اولما ما سيدر .)\n. نص ايله ثابت اولان شرعی حكمك حقنده نص اولمايان و اصلك نظيرى اولان بِعَيْنِهِ فرعه کچمه سیدر.\n. نصك حكمى قياسدن صکره اولدیغی حال اوزره اولمالیدر یعنی قیاس یا پلدقدن صکره اصلده و فرعده هیچ بر دكيشكلك اولما ما سيدر ."
        },
        {
            category: "55-72", originalNumber: 65, isDefinition: false,
            question: "(٦٥) اجتهادك شرطی و حکمی ندر؟",
            answer: "مجتهدك معنى و وجهلريله كتاب علمنى يوللريله سنت ،علمنى شرطلريله برابر قياسك وجهلريني بيلمه سيدر .\nحكمي غالب الرأى (کورش) ایله اصابتدر."
        },
        {
            category: "55-72", originalNumber: 66, isDefinition: false,
            question: "(٦٦) کتاب، سنت و اجماع ایله ثابت اولان احکام مشروعه قاچ قسمدر؟",
            answer: "دورت قسمدر :\n۱ . حقوق الله خالصه ( عبادتلر کی)\n۲ . حقوق العباد خالصه سرقت کبی)\n. ایکیسی اجتماع ايدوب حقوق الله غالب اولان ( حد قذف کبی )\n. ایکیسی اجتماع ايدوب حقوق العباد غالب اولان ( قصاص کی)"
        },
        {
            category: "55-72", originalNumber: 67, isDefinition: true,
            question: "(٦٧) احکام شرعيه نك تعلق ايتديكى حكملر قاچ قسمدر ؟ سبب حقیقی و علتك تعريفي ندر؟",
            answer: "دورت قسمدر سبب علت، شرط و علامت\nسبب حقيقى: <span lang='ar' dir='rtl'>مَا يَكُونُ طَرِيقًا إِلَى الْحُكْمِ</span> معناسی: حکمه کوتورن يولدر .\nعلت: <span lang='ar' dir='rtl'>وَهِيَ عِبَارَةٌ عَمَّا يُضَافُ إِلَيْهِ وُجُوبُ الْحُكْمِ ابْتِدَاءً</span> معناسی: ابتداء حكمك وجوبي كنديسنه مضاف قيلینان شیدن عبارتدر ."
        },
        {
            category: "55-72", originalNumber: 68, isDefinition: true,
            question: "(٦٨) شرط و علامتك تعريفي ندر؟",
            answer: "شرط: <span lang='ar' dir='rtl'>وَهُوَ مَا يَتَعَلَّقُ بِالْوُجُودِ دُونَ الْوُجُوبِ</span> معناسی وجوبه دکلده موجوديته تعلق ايدن شيدر.\nعلامت: <span lang='ar' dir='rtl'>وَهِيَ مَا يُعْرَفُ الْوُجُودُ مِنْ غَيْرِ تَعَلُّقِ وُجُودِ وَلَا وُجُوب</span> معناسی وجوب و وجوده تعلق ايتمكسزك موجوديتي بيلينندر."
        },
        {
            category: "55-72", originalNumber: 69, isDefinition: false,
            question: "٦٩) عوارض (اهليه ته مانع (عارض) اولان حاللر قاچ قسمدر و نه لردر؟",
            answer: "عوارض اهليه ته مانع (عارض) اولان حاللر ایکی قسمدر :\nعوارض سماويه حضرت الله طرافندن اولوب قولك اختيارى و کسبی اولمایان ( جنون نسیان نوم رق كوله لك)، عنه (بونامق)، حيض، نفاس، مرض ، موت\nعوارض مكتسبه كنديسنده قولك اختیاری و کسبی اولان جهل ، سكر ، هزل ، سفه، سفر ، خطا ، اكراه"
        },
        {
            category: "55-72", originalNumber: 70, isDefinition: false,
            question: "(۷۰) حرمات قاچ قسمدر و نه لردر؟",
            answer: "۱ - کندیسنده اصلا رخصت اولمایان : { قتل و زنا کبی\n۲- سقوطه احتمالی اولان { خمر میته و خنزيرك حرا ملغى كبى }\n۳- سقوطه احتمالی اولمامق ایله برابر رخصته احتمالی اولان { اکراه آننده لسان ایله کلمه کفرى سويله مك كبى }\n- سقوطه احتمالی اولوب عذر سببی ايله ساقط اولما يوب رخصته احتمالی اولان { بشقاسنك مالنى آلمق و ييمك كبي }"
        },
        {
            category: "55-72", originalNumber: 71, isDefinition: true,
            question: "(۷۱) فراست حکم و دليلك تعريفلرى ندر ؟",
            answer: "فراست: <span lang='ar' dir='rtl'>هِيَ مَا يَقَعُ فِي الْقَلْبِ بِغَيْرِ نَظَرِ فِي حُجَّةٍ</span> معناسی: دلیله نظر ايتمكسزك قلبده واقع اولاندر.\nحكم: <span lang='ar' dir='rtl'>مَا ثَبَتَ جَبْرًا</span> معناسی زورله ثابت اولان شیدر\nدليل: <span lang='ar' dir='rtl'>مَا يُتَوَصَّلُ بِصِحَّةِ النَّظَرِ فِيهِ إِلَى الْعِلْمِ</span> معناسی کندیسنه صحیح نظر ایله علمه اولا شیلان شيدر."
        },
        {
            category: "55-72", originalNumber: 72, isDefinition: true,
            question: "(۷۲) عرف و عادتك تعريفي ندر؟",
            answer: "عرف <span lang='ar' dir='rtl'>ما اشْتَهَرَ بِشَهَادَاتِ الْعُقُولِ وَ تَلَقَّتْهُ الطَّبَايِعُ السَّلِيمَةُ بِالْقَبُولِ</span>\nمعناسي: عقللرك شهادتلريله مشهور اولان ، سليم طبيعت صاحبلرينك قبول ايتديكي شيدر.\nعادت : <span lang='ar' dir='rtl'>مَا اسْتَمَرَّ النَّاسُ عَلَيْهِ وَ عَاوَدُوهُ</span> معناسی: انسانلرك اوزرینه دوام ایدوب ، تکرار تکرار دوندیکی شیلر در"
        }
    ],
    indonesia: [
        // Kategori 1-18 Indonesia
        {
            category: "1-18", originalNumber: 1, isDefinition: true,
            question: "Kitab Manar membahas tentang ilmu apa? Apakah definisi Ushul Fiqh?",
            answer: "Manar membahas tentang Ushul Fiqh.<br>Definisi Ushul Fiqh adalah: <span lang='ar' dir='rtl'>وَهُوَ عِلْمٌ يُعْرَفُ بِهِ أَحْوَالُ الأَدِلَّةِ وَالأَحْكَامِ الشَّرْعِيَّتَيْنِ مِنْ حَيْثُ أَنَّ لَهَا دَخْلاً فِي إِثْبَاتِ الثَّانِيَةِ بِالْأُولَى</span><br>Artinya: Ilmu yang dengannya diketahui keadaan-keadaan dalil syar'i dan hukum syar'i dari segi adanya pengaruh padanya dalam menetapkan hukum-hukum syar'i dengan dalil-dalil syar'i."
        },
        {
            category: "1-18", originalNumber: 2, isDefinition: false,
            question: "Apakah pokok bahasan (موضوع) dan tujuan (غاية) Ushul Fiqh?",
            answer: "Pokok bahasannya adalah dalil-dalil syar'i dan hukum-hukum syar'i. Tujuannya adalah meraih kebahagiaan di negeri keabadian (akhirat)."
        },
        {
            category: "1-18", originalNumber: 3, isDefinition: false,
            question: "Siapakah penyusun Ushul Fiqh dan pengarang kitab Mukhtashar Manar?",
            answer: "Penyusun (Ushul Fiqh) adalah Imam A'zham (Abu Hanifah).<br>Pengarang kitab (Mukhtashar Manar) adalah Ibnu Habib Al-Halabi."
        },
        {
            category: "1-18", originalNumber: 4, isDefinition: true,
            question: "Ada berapakah dalil-dalil syar'i (أدله شرعيه)? Dan apakah definisi Kitab?",
            answer: "Dalil-dalil syar'i ada empat: 1. Kitab, 2. Sunnah, 3. Ijma', 4. Qiyas.<br>Definisi Kitab adalah: <span lang='ar' dir='rtl'>هُوَ النَّظْمُ الْمُنْزَلُ عَلَى رَسُولِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ الْمَنْقُولُ عَنْهُ تَوَاتُرًا</span><br>Artinya: Susunan firman yang diturunkan kepada Nabi kita Muhammad صلى الله عليه وسلم, dan dinukilkan dari beliau kepada kita secara mutawatir."
        },
        {
            category: "1-18", originalNumber: 5, isDefinition: true,
            question: "Apakah yang dimaksud dengan pembahasan bersama (مباحث مشترکه) dan apa saja itu?",
            answer: "Yang dimaksud adalah pembahasan-pembahasan yang مشترک (bersama/berlaku) antara Kitab (Al-Qur'an) dan Sunnah.<br>Ini adalah nama untuk lafaz yang menunjukkan makna (النظم الدال على المعنى)."
        },
        {
            category: "1-18", originalNumber: 6, isDefinition: false,
            question: "Apa sajakah bagian-bagian dari \"An-Nazhm Ad-Dall 'ala Al-Ma'na\" (النظم الدال على المعنى نك قسملرى)?",
            answer: `<h5>Pembagian Lafaz (النظم) dari Segi Penunjukan Makna (وجوه النظم):</h5>
            <p>1. Khash (خاص), 2. 'Am (عام), 3. Musytarak (مشترك), 4. Muawwal (مؤول)</p>
            <p><strong>Dari Segi Kejelasan (وضوحًا):</strong> 1. Zhahir (ظاهر), 2. Nash (نص), 3. Mufassar (مفسر), 4. Muhkam (محكم)</p>
            <p><strong>Dari Segi Kesamaran (خفاء):</strong> 1. Khafi (خفی), 2. Musykil (مشکل), 3. Mujmal (مجمل), 4. Mutasyabih (متشابه)</p>
            <h5>Pembagian dari Segi Penggunaan Lafaz (وجوه الاستعمال):</h5>
            <p>1. Hakikat (حقيقت), 2. Majaz (مجاز), 3. Sharih (صريح), 4. Kinayah (كنايه)</p>
            <h5>Pembagian dari Segi Cara Penunjukan Makna (وجوه الوقوف على المعنى أو الدلالة):</h5>
            <p>1. Dalalah al-'Ibarah (دلالة العبارة), 2. Dalalah al-Isyarah (دلالة الإشارة), 3. Dalalah ad-Dalalah (دلالة الدلالة), 4. Dalalah al-Iqtidha' (دلالة الاقتضاء)</p>`
        },
        {
            category: "1-18", originalNumber: 7, isDefinition: true,
            question: "Apakah definisi Khash (خاص) dan hukumnya?",
            answer: "Khash adalah: <span lang='ar' dir='rtl'>وَهُوَ مَا وُضِعَ لِمَعْنَى مَعْلُومٍ عَلَى الإِنْفِرَادِ جِنْسًا أَوْ نَوْعًا أَوْ عَيْنًا</span><br>Artinya: Lafaz yang ditetapkan untuk suatu makna tertentu secara individual, baik berupa jenis, macam, maupun individu (عين).<br>Hukumnya: Memberikan kepastian (قطعیت) pada makna yang ditunjukkannya tanpa kemungkinan adanya penjelasan (بيان) lain."
        },
        {
            category: "1-18", originalNumber: 8, isDefinition: true,
            question: "Apakah definisi Amr (امر) dan konsekuensinya (موجبی)? Berikan informasi mengenai Amr!",
            answer: "Amr adalah: <span lang='ar' dir='rtl'>لَفْظُ طُلِبَ بِهِ الْفِعْلُ جَزْمًا بِوَضْعِهِ لَهُ اسْتِعْلاء</span><br>Artinya: Lafaz yang dengannya suatu perbuatan dituntut secara pasti melalui peletakannya untuk itu dengan cara dari atas ke bawah (استعلاء).<br>Konsekuensi Amr menunjukkan kewajiban, baik setelah adanya larangan maupun sebelum adanya larangan.<br>Amr termasuk Khash, dikhususkan untuk sighah (bentuk kata) yang menunjukkan kewajiban. Perbuatan Rasul (فعل رسول) tidak (secara otomatis) menunjukkan kewajiban."
        },
        {
            category: "1-18", originalNumber: 9, isDefinition: true,
            question: "Ada berapa macam hukum Amr? Jelaskan (تعریف ایدیکز)!",
            answer: "Hukum Amr ada dua macam:<br>1. Ada' (أدا): <span lang='ar' dir='rtl'>وَهُوَ إِقَامَةُ الْوَاجِبِ بِعَيْنِهِ</span> Artinya: Melaksanakan kewajiban itu sendiri sebagaimana adanya.<br>2. Qadha' (قضا): <span lang='ar' dir='rtl'>تَسْلِيمُ مِثْلِ الْوَاجِبِ بِالْأَمْرِ</span> Artinya: Menunaikan yang semisal dengan kewajiban yang diperintahkan."
        },
        {
            category: "1-18", originalNumber: 10, isDefinition: false,
            question: "Ada berapa macam Ada' (أدا)? Jelaskan!",
            answer: "Ada' ada tiga macam: 1. Ada' Kamil (اداي کامل) {seperti shalat berjamaah}<br>2. Ada' Qashir (اداي قاصر) {seperti shalat sendirian}<br>3. Ada' Syabih bil Qadha' (اداء شبيه بالقضاء) {seperti shalatnya orang yang masbuq (لاحق)}"
        },
        {
            category: "1-18", originalNumber: 11, isDefinition: false,
            question: "Ada berapa macam Qadha' (قضا)? Jelaskan!",
            answer: "Qadha' ada tiga macam: 1. Qadha' bi Mitslin Ma'qul (قضا بمثل معقول) {seperti mengqadha puasa dengan puasa}<br>2. Qadha' bi Mitslin Ghairi Ma'qul (قضا بمثل غير معقول) {seperti fidyah untuk puasa}<br>3. Qadha' bi Ma'na al-Ada' (قضا بمعنى الاداء) {seperti melakukan takbir zawaid pada shalat Ied saat ruku'}"
        },
        {
            category: "1-18", originalNumber: 12, isDefinition: false,
            question: "Apa saja pembagian Hasan (حسن)? Sebutkan beserta contohnya!",
            answer: "Hasan ada dua macam: 1. Hasan karena zatnya (حسن المعنى في عينه), 2. Hasan karena faktor lain (حسن المعنى في غيره).<br>Hasan karena zatnya ada dua macam:<br>1. Hasan karena peletakannya (حسن المعنى في وضعه) {seperti iman dan shalat}.<br>2. Yang digabungkan dengan Hasan karena peletakannya dan serupa dengan Hasan karena faktor lain {seperti puasa dan zakat}.<br>Hasan karena faktor lain ada dua macam:<br>1. Pelaksanaan perintahnya dianggap sebagai bukan pelaksanaan pada waktunya (غير اذا) {seperti jihad}.<br>2. Pelaksanaan perintahnya tidak dianggap sebagai bukan pelaksanaan pada waktunya (غير اداء) {seperti wudhu}. Hukum keduanya adalah sama."
        },
        {
            category: "1-18", originalNumber: 13, isDefinition: false,
            question: "Dari segi waktu, ada berapa macam Amr (امر)?",
            answer: "Dari segi waktu, Amr ada dua macam:<br>1. Mutlak dari waktu (وقتدن مطلق اولور), ini tidak menuntut kesegeraan (فوری), {seperti zakat}.<br>2. Terikat dengan waktu (وقت ایله مقید اولور)."
        },
        {
            category: "1-18", originalNumber: 14, isDefinition: false,
            question: "Apa saja macam-macam dan contoh Amr (امر) yang terikat dengan waktu?",
            answer: "Amr yang terikat dengan waktu ada 4 macam:<br>1. Waktu bagi yang ditunaikan (مؤدی) adalah sebagai wadah (ظرف); bagi pelaksanaannya (اداسی) adalah syarat; dan bagi kewajibannya (وجوبی) adalah sebab {seperti waktu shalat}. Hukumnya: Penentuan (تعيين) dalam niat adalah syarat. Karena sempitnya waktu, penentuan niat tidak gugur. Waktu hanya ditentukan dengan pelaksanaan (اداء).<br>2. Waktu bagi yang ditunaikan (مؤدی) adalah standar (معيار) dan bagi kewajibannya (وجوبی) adalah sebab {seperti hari-hari Ramadhan}. Hukumnya: Menafikan selain yang ditunaikan pada waktu tersebut. Dapat dilaksanakan dengan nama mutlak dan dengan kesalahan dalam sifat.<br>3. Waktu bagi yang ditunaikan (مؤدی) hanya sebagai standar (معيار) {seperti qadha puasa Ramadhan}. Hukumnya: Penentuan (تعيين) padanya adalah syarat. Tidak ada kemungkinan waktu terlewat.<br>4. Waktu yang Musykil (وقت مشکل) {seperti waktu haji}. Hukumnya: Penentuan (تعيين) dalam niat pada bulan-bulan haji adalah syarat."
        },
        {
            category: "1-18", originalNumber: 15, isDefinition: false,
            question: "Dengan apa orang-orang kafir (كفار) diperintahkan dan dengan apa mereka tidak diperintahkan?",
            answer: "Orang-orang kafir (كفار); dengan ijma' para fuqaha, berdasarkan perjanjian mereka di masa lalu, mereka diperintahkan untuk beriman (ايمان ايله مخاطبدرلر). Mereka tidak diperintahkan untuk melaksanakan ibadah-ibadah (عبادتلری ادا ایله مخاطب دكلدرلر) yang memiliki kemungkinan gugur {seperti shalat dan puasa}."
        },
        {
            category: "1-18", originalNumber: 16, isDefinition: true,
            question: "Apakah definisi Nahi (نهي)?",
            answer: "Nahi adalah: <span lang='ar' dir='rtl'>لَفْظُ طُلِبَ بِهِ الْكَفُّ جَزْمًا بِوَضْعِهِ لَهُ اسْتِعْلَاءً.</span><br>Artinya: Lafaz yang dengannya tuntutan untuk meninggalkan suatu perbuatan disampaikan secara pasti melalui peletakannya untuk itu dengan cara dari atas ke bawah (استعلاء)."
        },
        {
            category: "1-18", originalNumber: 17, isDefinition: false,
            question: "Dari segi sifat keburukan (قبح), Nahi (نهی) ada berapa macam? Berikan contohnya masing-masing!",
            answer: "Nahi dari segi sifat keburukan (قبح) ada dua macam:<br>1. Keburukan makna pada zatnya (قبح المعنى في عينه):<br>   a. Secara peletakan (وضعا اولور) {seperti kufur}.<br>   b. Secara syar'i (شرعًا اولور) {seperti menjual orang merdeka}.<br>2. Keburukan makna karena faktor lain (قبح المعنى فى غيره):<br>   a. Secara sifat (وصفا اولور) {seperti puasa pada hari-hari terlarang (ايام منهیه)}.<br>   b. Secara bersinggungan (مجاورا اولور) {seperti jual beli (بيع) saat adzan Jumat dikumandangkan}."
        },
        {
            category: "1-18", originalNumber: 18, isDefinition: true,
            question: "Sebutkan definisi 'Am (عام) dan hukumnya! Apakah 'Am dapat menasakh Khash (خاص)?",
            answer: "Definisi 'Am: <span lang='ar' dir='rtl'>وَهُوَ مَا تَنَاوَلَ أَفْرَادًا مُتَّفِقَةَ الْحُدُودِ عَلَى سَبِيلِ الشُّمُولِ</span><br>Artinya: Lafaz yang mencakup individu-individu yang batasannya sama melalui jalan فراگیر (شمول).<br>Hukumnya: Menetapkan hukum secara pasti (قطعی) pada individu-individu yang dicakupnya.<br>Menasakh hukum Khash dengan 'Am adalah boleh (جائز)."
        },
        // Kategori 19-36 Indonesia
        {
            category: "19-36", originalNumber: 19, isDefinition: true,
            question: "Sebutkan definisi Musytarak (مشترك) dan hukumnya!",
            answer: "Definisi Musytarak: <span lang='ar' dir='rtl'>وَهُوَ مَا تَنَاوَلَ أَفْرَادًا مُخْتَلِفَةَ الْخُدُودِ بِالْبَدَلِ</span><br>Artinya: Lafaz yang mencakup individu-individu yang batasannya berbeda melalui jalan penggantian (بدل).<br>Hukumnya: Perlu perenungan (تأمل) untuk mentarjih salah satu makna dari makna-makna musytarak agar bisa diamalkan.<br>(Maksudnya adalah memikirkannya.)"
        },
        {
            category: "19-36", originalNumber: 20, isDefinition: true,
            question: "Sebutkan definisi Muawwal (مؤول) dan hukumnya!",
            answer: "Definisi Muawwal: <span lang='ar' dir='rtl'>وَهُوَ مَا تُرْجِحَ مِنَ الْمُشْتَرَكِ بَعْضُ وُجُوهِهِ بِغَالِبِ الرَّأْي</span><br>Artinya: Lafaz musytarak yang salah satu maknanya ditarjih (lebih dikuatkan) berdasarkan dugaan kuat (ظن غالب).<br>Hukumnya: Mengamalkannya dengan kemungkinan adanya kesalahan (خطا)."
        },
        {
            category: "19-36", originalNumber: 21, isDefinition: true,
            question: "Sebutkan definisi Zhahir (ظاهر) dan hukumnya!",
            answer: "Definisi Zhahir: <span lang='ar' dir='rtl'>وَهُوَ مَا ظَهَرَ الْمُرَادُ مِنْهُ بِصِيغَتِهِ.</span><br>Artinya: Lafaz yang makna yang dimaksud darinya tampak jelas hanya dengan mendengar bentuk (sighah) lafaznya.<br>Hukumnya: Wajib mengamalkan makna yang tampak jelas darinya."
        },
        {
            category: "19-36", originalNumber: 22, isDefinition: true,
            question: "Sebutkan definisi Nash (نص) dan hukumnya!",
            answer: "Definisi Nash: <span lang='ar' dir='rtl'>وَهُوَ مَا زَادَ وُضُوحًا عَلَى الظَّاهِرِ بِمَعْنَى مِنَ الْمُتَكَلِّمِ</span><br>Artinya: Lafaz yang kejelasannya melebihi Zhahir karena adanya suatu makna (tambahan) dari pembicara (المتكلم).<br>Hukumnya: Wajib mengamalkan makna yang dipahami secara jelas, meskipun masih ada kemungkinan takwil majazi."
        },
        {
            category: "19-36", originalNumber: 23, isDefinition: true,
            question: "Sebutkan definisi Mufassar (مفسر) dan hukumnya!",
            answer: "Definisi Mufassar: <span lang='ar' dir='rtl'>وَهُوَ مَا زَادَ وُضُوحًا عَلَى النَّصِ مِنْ غَيْرِ احْتِمَالِ تَأْوِيلٍ</span><br>Artinya: Lafaz yang kejelasannya melebihi Nash, tanpa ada kemungkinan takwil.<br>Hukumnya: Wajib mengamalkannya, meskipun masih ada kemungkinan nasakh."
        },
        {
            category: "19-36", originalNumber: 24, isDefinition: true,
            question: "Sebutkan definisi Muhkam (محكم) dan hukumnya!",
            answer: "Definisi Muhkam: <span lang='ar' dir='rtl'>وَهُوَ مَا أَحْكِمَ الْمُرَادُ بِهِ عَنِ احْتِمَالِ النَّسْخِ وَ التَّبْدِيلِ</span><br>Artinya: Lafaz yang makna yang dimaksud oleh pembicara (المتكلم) dikukuhkan dengannya sehingga tidak ada kemungkinan nasakh (penghapusan) atau tabdil (penggantian).<br>Hukumnya: Wajib mengamalkannya tanpa ada kemungkinan takwil, takhshish (pengkhususan), maupun nasakh."
        },
        {
            category: "19-36", originalNumber: 25, isDefinition: true,
            question: "Sebutkan definisi Khafi (خفي) dan hukumnya!",
            answer: "Definisi Khafi: <span lang='ar' dir='rtl'>وَهُوَ مَا خَفِيَ الْمُرَادُ بِهِ بِعَارِضٍ تَحْتَاجُ إِلَى الطَّلَبِ</span><br>Artinya: Lafaz yang makna yang dimaksud darinya tersembunyi karena adanya suatu 'aridh (faktor penghalang) yang memerlukan pencarian (untuk memahaminya).<br>Hukumnya: Melihat kepada lafaz yang khafi tersebut untuk menjelaskan apakah kesamaran maknanya disebabkan oleh kelebihan atau kekurangan."
        },
        {
            category: "19-36", originalNumber: 26, isDefinition: true,
            question: "Sebutkan definisi Musykil (مشكل) dan hukumnya!",
            answer: "Definisi Musykil: <span lang='ar' dir='rtl'>وَهُوَ مَا فَوْقَ الخَفِي لِاحْتِيَاجِ الطَّلَبِ وَ التَّأَمُّلِ</span><br>Artinya: Lafaz yang tingkat kesamarannya di atas Khafi, karena memerlukan pencarian dan perenungan (untuk memahaminya).<br>Hukumnya: Meyakini bahwa makna yang dimaksud adalah benar hingga makna yang dimaksud oleh pembicara (المتكلم) dijelaskan melalui pencarian dan perenungan."
        },
        {
            category: "19-36", originalNumber: 27, isDefinition: true,
            question: "Sebutkan definisi Mujmal (مجمل) dan hukumnya!",
            answer: "Definisi Mujmal: <span lang='ar' dir='rtl'>وَهُوَ مَا اشْتَبَهَ مُرَادُهُ فَاحْتَاجَ إِلَى الاسْتِفْسَارِ</span><br>Artinya: Lafaz yang makna yang dimaksud darinya menjadi kabur sehingga memerlukan penjelasan (istifsar).<br>Hukumnya: Menunggu hingga makna yang dimaksud oleh Allah dan Rasul-Nya dijelaskan."
        },
        {
            category: "19-36", originalNumber: 28, isDefinition: true,
            question: "Sebutkan definisi Mutasyabih (متشابه) dan hukumnya!",
            answer: "Definisi Mutasyabih: <span lang='ar' dir='rtl'>وَهُوَ مَا لَمْ يُرْجَ بَيَانُ مُرَادِهِ لِشِدَّةِ خَفَائِهِ</span><br>Artinya: Lafaz yang penjelasan makna yang dimaksud darinya tidak dapat diharapkan karena sangat tersembunyi.<br>Hukumnya: Meyakini kebenaran makna yang dimaksud sambil melakukan tawaqquf (menahan diri dari menentukan maknanya)."
        },
        {
            category: "19-36", originalNumber: 29, isDefinition: true,
            question: "Apakah definisi Hakikat (حقیقت) dan Majaz (مجاز) serta hukum keduanya?",
            answer: "Hakikat: <span lang='ar' dir='rtl'>وَهِيَ اسْمٌ لِمَا أُرِيدَ بِهِ مَا وُضِعَ لَهُ</span> Artinya: Nama untuk lafaz yang makna yang dimaksud dengannya adalah makna asal peletakannya.<br>Majaz: <span lang='ar' dir='rtl'>وَهِيَ اسْمٌ لِمَا أُرِيدَ بِهِ غَيْرُ مَا وُضِعَ لَهُ</span> Artinya: Nama untuk lafaz yang makna yang dimaksud dengannya adalah selain makna asal peletakannya.<br>Hukum keduanya: Tidak mungkin makna hakikat dan majaz dimaksudkan secara bersamaan dalam satu lafaz. Apabila memungkinkan untuk mengamalkan makna hakikat, maka makna majaz gugur."
        },
        {
            category: "19-36", originalNumber: 30, isDefinition: false,
            question: "Kapan makna hakiki ditinggalkan dan beralih ke makna majazi? Di tempat mana saja hakikat ditinggalkan dan beralih ke majaz?",
            answer: "Apabila makna hakiki berhalangan, baik secara adat maupun syariat, maka beralih ke makna majazi.<br>Tempat-tempat di mana hakikat ditinggalkan dan beralih ke majaz:<br>• Karena petunjuk adat.<br>• Karena petunjuk konteks pembicaraan (محل كلام).<br>• Karena petunjuk makna yang kembali kepada pembicara (متکلم).<br>• Karena petunjuk susunan kalimat (سياق نظم).<br>• Karena petunjuk lafaz itu sendiri (بالذات لفظ)."
        },
        {
            category: "19-36", originalNumber: 31, isDefinition: true,
            question: "Sebutkan definisi Sharih (صريح) dan hukumnya!",
            answer: "Sharih: <span lang='ar' dir='rtl'>مَا ظَهَرَ مُرَادُهُ بَيِّنًا</span><br>Artinya: Lafaz yang makna yang dimaksud oleh pembicara (المتكلم) tampak jelas.<br>Hukumnya: Tetapnya konsekuensi (موجب) tanpa memerlukan niat."
        },
        {
            category: "19-36", originalNumber: 32, isDefinition: true,
            question: "Sebutkan definisi Kinayah (كنايه) dan hukumnya!",
            answer: "Kinayah: <span lang='ar' dir='rtl'>مَا لَمْ يَظْهَرِ الْمُرَادُ بِهِ إِلَّا بِقَرِينَةٍ.</span><br>Artinya: Lafaz yang makna yang dimaksud oleh pembicara (المتكلم) tidak tampak kecuali dengan adanya qarinah (indikasi).<br>Hukumnya: Wajib mengamalkannya hanya dengan adanya niat atau sesuatu yang menempati posisi niat."
        },
        {
            category: "19-36", originalNumber: 33, isDefinition: true,
            question: "Sebutkan definisi Dalalah al-'Ibarah (دال بالعباره) dan hukumnya!",
            answer: "Dalalah al-'Ibarah: <span lang='ar' dir='rtl'>وَهُوَ الْعَمَلُ بِظَاهِرِ مَا سِيقَ الْكَلَامُ لَهُ.</span><br>Artinya: Mengamalkan makna lahiriah dari apa yang menjadi tujuan utama penyampaian kalimat.<br>Hukumnya: Memberikan kepastian (قطعیت)."
        },
        {
            category: "19-36", originalNumber: 34, isDefinition: true,
            question: "Sebutkan definisi Dalalah al-Isyarah (دال بالاشاره) dan hukumnya!",
            answer: "Dalalah al-Isyarah: <span lang='ar' dir='rtl'>وَهُوَ الْعَمَلُ بِمَا ثَبَتَ بِنَظْمِهِ لُغَةً.</span><br>Artinya: Mengamalkan sesuatu yang tetap berdasarkan susunan lafaznya secara bahasa.<br>Hukumnya: Memberikan kepastian (قطعیت)."
        },
        {
            category: "19-36", originalNumber: 35, isDefinition: true,
            question: "Sebutkan definisi Dalalah ad-Dalalah (دال بالدلاله) dan hukumnya!",
            answer: "Dalalah ad-Dalalah: <span lang='ar' dir='rtl'>وَهُوَ مَا ثَبَتَ بِمَعْنَاهُ لُغَةً</span><br>Artinya: Hukum yang tetap berdasarkan makna lafaznya secara bahasa.<br>Hukumnya: Memberikan kepastian (قطعیت)."
        },
        {
            category: "19-36", originalNumber: 36, isDefinition: true,
            question: "Sebutkan definisi Dalalah al-Iqtidha' (دال بالاقتضاء)?",
            answer: "Dalalah al-Iqtidha': <span lang='ar' dir='rtl'>مَا لَمْ يُعْمَل النَّصُ إِلَّا بِشَرْطِ تَقَدُّمِهِ عَلَيْهِ.</span><br>Artinya: Hukum yang mana nash tidak dapat diamalkan kecuali dengan syarat adanya sesuatu yang mendahuluinya (yang dituntut oleh nash tersebut)."
        },
        // Kategori 37-54 Indonesia
        {
            category: "37-54", originalNumber: 37, isDefinition: false,
            question: "Jika terjadi pertentangan (تعارض) antara dalalah-dalalah, bagaimana hukumnya?",
            answer: "Jika terjadi pertentangan antara Dalalah al-'Ibarah dan Dalalah al-Isyarah, maka Dalalah al-'Ibarah yang didahulukan.<br>Jika terjadi pertentangan antara Dalalah al-Isyarah dan Dalalah ad-Dalalah, maka Dalalah al-Isyarah yang didahulukan.<br>Jika terjadi pertentangan antara Dalalah ad-Dalalah dan Dalalah al-Iqtidha', maka Dalalah ad-Dalalah yang didahulukan."
        },
        {
            category: "37-54", originalNumber: 38, isDefinition: true,
            question: "Ada berapa macam Masyru'at (مشروعات)? Apakah definisi 'Azimah (عزیمت) dan Rukhshah (رخصت)?",
            answer: "Masyru'at ada dua macam: 1. 'Azimah, 2. Rukhshah.<br>'Azimah: Sesuatu yang disyariatkan sejak awal tanpa didasarkan pada uzur para hamba.<br>Rukhshah: <span lang='ar' dir='rtl'>وَهِيَ مَا تَغَيَّرَ مِنْ عُسْرٍ لِيُسْرِ بِعُذْرٍ</span><br>Artinya: Hukum yang berubah dari kesulitan menjadi kemudahan karena adanya uzur."
        },
        {
            category: "37-54", originalNumber: 39, isDefinition: true,
            question: "Ada berapa macam 'Azimah (عزیمت)? Apakah definisi Fardhu (فرض) dan hukumnya?",
            answer: "'Azimah ada empat macam: Fardhu, Wajib, Sunnah, Nafilah.<br>Fardhu: <span lang='ar' dir='rtl'>وَهُوَ مَا ثَبَتَ بِدَلِيلٍ قَطْعِيَ لَا شُبْهَةَ فِيهِ</span><br>Artinya: Sesuatu yang tetap berdasarkan dalil qath'i (pasti) yang tidak ada syubhat (keraguan) padanya.<br>Hukumnya: Keharusan untuk membenarkan dengan hati dan mengamalkan dengan badan. Orang yang mengingkari kefardhuannya menjadi kafir, dan yang meninggalkannya tanpa uzur menjadi fasiq."
        },
        {
            category: "37-54", originalNumber: 40, isDefinition: true,
            question: "Apakah definisi Wajib (واجب) dan hukumnya?",
            answer: "Wajib: <span lang='ar' dir='rtl'>وَهُوَ مَا ثَبَتَ بِدَلِيلٍ فِيهِ شُبْهَةٌ.</span><br>Artinya: Sesuatu yang tetap berdasarkan dalil yang padanya terdapat syubhat (keraguan dalam penunjukannya).<br>Hukumnya: Keharusan untuk mengamalkannya sebagaimana fardhu."
        },
        {
            category: "37-54", originalNumber: 41, isDefinition: true,
            question: "Apakah definisi Sunnah (سنت) dan hukumnya?",
            answer: "Sunnah: <span lang='ar' dir='rtl'>وَهِيَ الطَّرِيقَةُ الْمَسْلُوكَةُ فِي الدِّينِ.</span><br>Artinya: Jalan yang ditempuh dalam agama.<br>Hukumnya: Dituntut untuk dilaksanakan tanpa dihukumi fardhu atau wajib."
        },
        {
            category: "37-54", originalNumber: 42, isDefinition: true,
            question: "Apakah definisi Nafilah (نافله) dan hukumnya?",
            answer: "Nafilah: <span lang='ar' dir='rtl'>وَهُوَ مَا زَادَ عَلَى الْعِبَادَاتِ.</span><br>Artinya: Sesuatu yang ditambahkan di atas ibadah-ibadah (wajib/sunnah muakkadah).<br>Hukumnya: Pelakunya mendapat pahala, yang meninggalkannya tidak mendapat siksa. Menjadi wajib dengan sebab memulainya."
        },
        {
            category: "37-54", originalNumber: 43, isDefinition: true,
            question: "Apakah definisi Mubah (مباح)?",
            answer: "Mubah: <span lang='ar' dir='rtl'>وَهُوَ مَا لَيْسَ لِفِعْلِهِ ثَوَابٌ وَلَا لِتَرْكِهِ عِقَابٌ.</span><br>Artinya: Sesuatu yang pelakunya tidak mendapat pahala atas perbuatannya, dan yang meninggalkannya tidak mendapat siksa atas peninggalannya."
        },
        {
            category: "37-54", originalNumber: 44, isDefinition: false,
            question: "Apa saja sebab-sebab hukum-hukum yang disyariatkan (احکام مشروعه)?",
            answer: "Sebab wajibnya iman adalah adanya alam semesta (حادث اولماسيدر).<br>Sebab shalat adalah waktu.<br>Sebab zakat adalah kepemilikan harta senisab.<br>Sebab puasa adalah hari-hari Ramadhan.<br>Sebab zakat fitrah adalah orang-orang yang menjadi tanggungannya.<br>Sebab haji adalah Baitullah.<br>Sebab 'usyur dan kharaj adalah adanya tanah yang tumbuh (berkembang) baik secara hakikat maupun perkiraan.<br>Sebab wudhu adalah shalat."
        },
        {
            category: "37-54", originalNumber: 45, isDefinition: true,
            question: "Apakah definisi Sunnah (سنت) dan pembagiannya?",
            answer: "Sunnah: <span lang='ar' dir='rtl'>وَهِيَ الْمَرْوِيُّ عَنْ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَوْلًا وَ فِعْلًا وَ تَقْرِيرًا</span><br>Artinya: Apa yang diriwayatkan dari Rasulullah صلى الله عليه وسلم baik berupa ucapan (قولا), perbuatan (فعلا), maupun ketetapan (تقريرا).<br>Sunnah Qauliyah: Hadits-hadits syarif.<br>Sunnah Fi'liyah: Hal-hal yang beliau kerjakan, seperti menggunakan siwak.<br>Sunnah Taqririyah: Hal-hal yang dilakukan orang lain dan beliau tidak melarangnya serta mendiamkannya."
        },
        {
            category: "37-54", originalNumber: 46, isDefinition: false,
            question: "Ada berapa macam Sunnah Qauliyah? Ada berapa bentuk کیفیت اتصال (cara bersambungnya sanad)?",
            answer: "Macam-macam Sunnah Qauliyah ada empat: 1. Cara bersambungnya sanad (کیفیت اتصال), 2. Cara terputusnya sanad (کیفیت انقطاع), 3. Objek berita (محل خبر), 4. Isi berita itu sendiri (نفس خبر).<br>Cara bersambungnya sanad (کیفیت اتصال) ada tiga bentuk: 1. Khabar Mutawatir, 2. Khabar Masyhur, 3. Khabar Ahad."
        },
        {
            category: "37-54", originalNumber: 47, isDefinition: true,
            question: "Apakah definisi Khabar Mutawatir (خبر متواتر)?",
            answer: "Khabar Mutawatir: <span lang='ar' dir='rtl'>وَهُوَ الْكَامِلُ الَّذِي رَوَاهُ قَوْمٌ لَا يُحْصى عَدَدُهُمْ وَلَا يُتَوَهَّمُ تَوَاطُتُهُمْ عَلَى الْكِذْبِ</span><br>Artinya: Khabar yang sempurna, yang diriwayatkan oleh sekelompok orang yang jumlahnya tidak terhitung dan tidak terbayangkan kesepakatan mereka untuk berdusta."
        },
        {
            category: "37-54", originalNumber: 48, isDefinition: false, // Menjelaskan bukan definisi istilah tunggal
            question: "Apakah Khabar Masyhur (خبر مشهور) dan Khabar Ahad (خبر آحاد)?",
            answer: "Khabar Masyhur: Khabar yang pada sampainya kepada kita terdapat syubhat secara bentuknya. Ini adalah khabar yang diketahui dari perorangan lalu pada abad kedua dan ketiga mencapai tingkatan mutawatir.<br>Khabar Ahad: Khabar yang pada sampainya kepada kita terdapat syubhat baik secara bentuk maupun makna."
        },
        {
            category: "37-54", originalNumber: 49, isDefinition: false,
            question: "Ada berapa macam cara terputusnya sanad (كيفيت انقطاع)? Sebutkan!",
            answer: "Ada dua macam: 1. Terputus secara lahir (ظاهر اولور), 2. Terputus secara batin (باطن اولور).<br>Yang terputus secara lahir adalah mursal, yang ada empat macam:<br>1. Mursal sahabat, menurut ijma' adalah dalil.<br>2. Mursal abad kedua (tabi'in) dan ketiga (tabi'ut tabi'in), menurut mazhab Hanafi adalah dalil (hujjah).<br>3. Mursal orang adil di setiap masa, menurut Imam Al-Karkhi adalah dalil.<br>4. Mursal dari satu sisi dan musnad dari sisi lain, diterima menurut ulama yang menerima mursal."
        },
        {
            category: "37-54", originalNumber: 50, isDefinition: false,
            question: "Hadits syarif yang terputus secara batin (باطنا منقطع) ada berapa macam?",
            answer: "Ada dua macam:<br>1. Karena kekurangan pada perawi. Yaitu karena syarat-syarat yang dicari pada perawi (akal, Islam, kedhabitan, keadilan) tidak terpenuhi.<br>2. Karena bertentangan dengan dalil yang lebih kuat darinya."
        },
        {
            category: "37-54", originalNumber: 51, isDefinition: false,
            question: "Ada berapa objek berita (محل خبر)? Apakah Haqqullah (حقوق الله)? Jelaskan!",
            answer: "Ada dua macam: 1. Haqqullah (hak-hak Allah), 2. Haqqul 'Ibad (hak-hak hamba).<br>Haqqullah meliputi ibadah {seperti shalat, zakat} dan 'uqubat (hukuman) {seperti had zina, had qadzaf}."
        },
        {
            category: "37-54", originalNumber: 52, isDefinition: false,
            question: "Ada berapa macam Haqqul 'Ibad (حقوق العباد)? Jelaskan!",
            answer: "Haqqul 'Ibad (Hak-hak hamba):<br>1. Yang padanya hanya ada الزام (keharusan), seperti jual beli.<br>2. Yang padanya sama sekali tidak ada الزام (keharusan), seperti wakalah. Macam ini bisa tetap (tsabit) meskipun dengan khabar wahid.<br>3. Yang dari satu sisi ada الزام dan dari sisi lain tidak ada الزام, seperti mencabut (status) wakil. Menurut Imam A'zham, pada macam ini disyaratkan jumlah (perawi) dan keadilan."
        },
        {
            category: "37-54", originalNumber: 53, isDefinition: false,
            question: "Jelaskan macam-macam, contoh, dan hukum dari isi berita itu sendiri (نفس خبر)!",
            answer: "Ada empat macam:<br>1. Yang kebenarannya diketahui (wajib), {seperti berita para rasul}. Hukumnya: Meyakini kebenarannya dan mengamalkannya.<br>2. Yang kedustaannya diketahui (wajib), {seperti klaim rububiyah Fir'aun}. Hukumnya: Meyakini kebatilannya.<br>3. Yang kemungkinan benar dan dustanya sama tanpa ada yang lebih unggul, {seperti berita orang fasiq}. Hukumnya: Tawaqquf (menahan diri) padanya.<br>4. Yang kebenarannya lebih unggul daripada kedustaannya, {seperti berita orang adil yang memenuhi syarat}. Hukumnya: Mengamalkannya tanpa (harus) meyakini (secara pasti akan) kebenarannya."
        },
        {
            category: "37-54", originalNumber: 54, isDefinition: false,
            question: "Jika terjadi pertentangan (تعارض) antara dalil-dalil, bagaimana hukumnya?",
            answer: "Jika terjadi pertentangan antara dua ayat, maka merujuk kepada Sunnah.<br>Jika terjadi pertentangan antara dua Sunnah, maka merujuk kepada perkataan sahabat. Jika perkataan sahabat tidak ditemukan, maka merujuk kepada qiyas.<br>Jika terjadi pertentangan antara dua qiyas, jika memungkinkan untuk ditarjih (diunggulkan salah satunya), maka diamalkan yang itu.<br>Jika tidak mungkin mentarjih antara qiyas-qiyas, maka mujtahid beramal dengan kesaksian (kecenderungan) hatinya."
        },
        // Kategori 55-72 Indonesia
        {
            category: "55-72", originalNumber: 55, isDefinition: true,
            question: "Sebutkan lima macam bayan (بيانات خمسى) dan jelaskan definisi Bayan Taqrir (بيان تقرير)!",
            answer: "Ada lima macam: 1. Bayan Taqrir, 2. Bayan Tafsir, 3. Bayan Taghyir, 4. Bayan Dharurat, 5. Bayan Tabdil.<br>Bayan Taqrir: <span lang='ar' dir='rtl'>هُوَ تَوْكِيدُ الْكَلَامِ بِمَا يَقْطَعُ احْتِمَالَ الْمَجَازِ أَوِ الْخُصُوصِ</span><br>Artinya: Menguatkan perkataan dengan sesuatu yang menghilangkan kemungkinan makna majaz atau pengkhususan."
        },
        {
            category: "55-72", originalNumber: 56, isDefinition: true,
            question: "Apakah definisi Bayan Tafsir (بيان تفسير) dan Bayan Taghyir (بيان تغيير)?",
            answer: "Bayan Tafsir: <span lang='ar' dir='rtl'>وَهُوَ بَيَانُ الْمُجْمَلِ</span> Artinya: Menjelaskan lafaz yang mujmal (global/belum terperinci).<br>Bayan Taghyir: <span lang='ar' dir='rtl'>وَهُوَ التَّعْلِيقُ بِالشَّرْطِ وَالْإِسْتِثْنَاءِ</span> Artinya: Mengaitkan hukum dengan syarat atau istitsna (pengecualian)."
        },
        {
            category: "55-72", originalNumber: 57, isDefinition: true,
            question: "Apakah definisi Bayan Dharurat (بيان ضرورت) dan Bayan Tabdil (بيان تبديل)?",
            answer: "Bayan Dharurat: <span lang='ar' dir='rtl'>وَهُوَ نَوْعُ بَيَانٍ يَقَعُ بِمَا لَمْ يُوضَعْ لَهُ</span> Artinya: Jenis penjelasan yang terjadi dengan sesuatu yang tidak diletakkan untuknya (bukan lafaz penjelasan).<br>Bayan Tabdil: <span lang='ar' dir='rtl'>وَهُوَ النَّسْخُ</span> Artinya: Nasakh (menghapus hukum)."
        },
        {
            category: "55-72", originalNumber: 58, isDefinition: false,
            question: "Sebutkan tempat-tempat di mana nasakh berlaku! Apakah qiyas dan ijma' bisa menjadi nasikh (yang menghapus)?",
            answer: "Boleh hukum masing-masing dari Kitab dan Sunnah dinasakh oleh yang lainnya.<br>Nasakh berlaku dalam empat keadaan: 1. Kitab dengan Kitab, 2. Kitab dengan Sunnah, 3. Sunnah dengan Sunnah, 4. Sunnah dengan Kitab.<br>Qiyas dan Ijma' bukanlah nasikh."
        },
        {
            category: "55-72", originalNumber: 59, isDefinition: false,
            question: "Apa saja yang dinasakh dari Kitab (Al-Qur'an)?",
            answer: "1. Tilawah (bacaan) dan hukumnya dinasakh.<br>2. Hukumnya tetap, tilawahnya dinasakh.<br>3. Tilawahnya tetap, hukumnya dinasakh.<br>4. Hanya sifat dari hukumnya yang dinasakh."
        },
        {
            category: "55-72", originalNumber: 60, isDefinition: false,
            question: "Berikan informasi mengenai perbuatan Nabi (افعال نبي)!",
            answer: "Jika diketahui dari sisi mana perbuatan yang dilakukan oleh Rasulullah صلى الله عليه وسلم itu terjadi {apakah fardhu, wajib, sunnah, atau mubah}, maka beliau diikuti sebagaimana perbuatan itu terjadi. Jika sifatnya tidak diketahui, maka beliau diikuti sebagai perbuatan mubah."
        },
        {
            category: "55-72", originalNumber: 61, isDefinition: false,
            question: "Kapan wajib beramal dengan syariat umat terdahulu (شرائع من قبلنا)? Apa dalilnya?",
            answer: "Ketika Allah جل جلاله dan Rasul-Nya صلى الله عليه وسلم mengisahkannya kepada kita tanpa mengingkarinya, maka itu menjadi syariat bagi Rasulullah صلى الله عليه وسلم sehingga wajib bagi kita untuk mengamalkannya."
        },
        {
            category: "55-72", originalNumber: 62, isDefinition: false,
            question: "Berikan informasi mengenai taklid kepada Sahabat dan Tabi'in!",
            answer: "Taklid kepada Sahabat adalah wajib, dan dengan itu qiyas ditinggalkan.<br>Boleh taklid kepada Tabi'in yang fatwanya muncul pada zaman Sahabat (seperti Hasan Bashri رحمه الله عليه)."
        },
        {
            category: "55-72", originalNumber: 63, isDefinition: false,
            question: "Ada berapa tingkatan Ijma' (اجماع) dan apa saja itu?",
            answer: "Ada tiga:<br>1. Ijma' para Sahabat ketika semuanya telah wafat. Ini seperti ayat Al-Qur'an (kekuatannya), orang yang mengingkarinya menjadi kafir.<br>2. Ijma' para Tabi'in dalam suatu masalah yang tidak diperselisihkan oleh para Sahabat. Ini seperti khabar masyhur, orang yang mengingkarinya menjadi sesat (مضل).<br>3. Ijma' para Tabi'in dalam masalah-masalah yang diperselisihkan oleh para Sahabat. Ini seperti khabar ahad, orang yang mengingkarinya tidak menjadi kafir maupun sesat."
        },
        {
            category: "55-72", originalNumber: 64, isDefinition: false,
            question: "Apa saja syarat-syarat Qiyas (قياس)?",
            answer: "Syarat-syarat Qiyas:<br>1. Ashl (pokok yang diqiyaskan) tidak dikhususkan hanya untuk hukumnya sendiri.<br>2. Ashl tidak menyimpang dari qiyas (yaitu, tidak tetap hukumnya menyalahi qiyas dan kaidah umum).<br>3. Hukum syar'i yang tetap dengan nash pada ashl tersebut berpindah kepada far'u (cabang yang diqiyaskan) yang tidak ada nash tentangnya dan merupakan padanan dari ashl tersebut.<br>4. Hukum nash harus tetap seperti keadaannya setelah qiyas dilakukan, artinya setelah qiyas dilakukan tidak boleh ada perubahan apapun pada ashl maupun far'u."
        },
        {
            category: "55-72", originalNumber: 65, isDefinition: false, // Definisi syarat ijtihad
            question: "Apakah syarat dan hukum Ijtihad (اجتهاد)?",
            answer: "Syarat bagi mujtahid adalah mengetahui ilmu Kitab beserta makna dan aspek-aspeknya, ilmu Sunnah beserta jalur-jalurnya, dan aspek-aspek qiyas beserta syarat-syaratnya.<br>Hukumnya adalah mencapai kebenaran berdasarkan dugaan kuat (غالب الرأى)."
        },
        {
            category: "55-72", originalNumber: 66, isDefinition: false,
            question: "Ada berapa macam hukum-hukum yang disyariatkan (احکام مشروعه) yang tetap berdasarkan Kitab, Sunnah, dan Ijma'?",
            answer: "Ada empat macam:<br>1. Hak-hak Allah semata (حقوق الله خالصه) {seperti ibadah}.<br>2. Hak-hak hamba semata (حقوق العباد خالصه) {seperti (hukuman) pencurian}.<br>3. Keduanya berkumpul dan hak Allah lebih dominan {seperti had qadzaf (menuduh zina)}.<br>4. Keduanya berkumpul dan hak hamba lebih dominan {seperti qishash}."
        },
        {
            category: "55-72", originalNumber: 67, isDefinition: true,
            question: "Ada berapa macam hukum yang terkait dengan hukum-hukum syar'i (احکام شرعيه)? Apakah definisi Sabab Haqiqi (سبب حقیقی) dan 'Illat (علت)?",
            answer: "Ada empat macam: Sabab (sebab), 'Illat (alasan hukum), Syarth (syarat), dan 'Alamah (tanda).<br>Sabab Haqiqi: <span lang='ar' dir='rtl'>مَا يَكُونُ طَرِيقًا إِلَى الْحُكْمِ</span> Artinya: Jalan yang mengantarkan kepada hukum.<br>'Illat: <span lang='ar' dir='rtl'>وَهِيَ عِبَارَةٌ عَمَّا يُضَافُ إِلَيْهِ وُجُوبُ الْحُكْمِ ابْتِدَاءً</span> Artinya: Ungkapan tentang sesuatu yang kepadanya disandarkan kewajiban hukum sejak awal."
        },
        {
            category: "55-72", originalNumber: 68, isDefinition: true,
            question: "Apakah definisi Syarth (شرط) dan 'Alamah (علامت)?",
            answer: "Syarth: <span lang='ar' dir='rtl'>وَهُوَ مَا يَتَعَلَّقُ بِالْوُجُودِ دُونَ الْوُجُوبِ</span> Artinya: Sesuatu yang berkaitan dengan keberadaan (hukum) bukan dengan kewajibannya.<br>'Alamah: <span lang='ar' dir='rtl'>وَهِيَ مَا يُعْرَفُ الْوُجُودُ مِنْ غَيْرِ تَعَلُّقِ وُجُودِ وَلَا وُجُوب</span> Artinya: Sesuatu yang dengannya diketahui keberadaan (hukum) tanpa berkaitan dengan keberadaan maupun kewajibannya."
        },
        {
            category: "55-72", originalNumber: 69, isDefinition: false,
            question: "Ada berapa macam 'Awaridh (عوارض) (hal-hal yang menghalangi kecakapan hukum/ahliyah) dan apa saja itu?",
            answer: "Hal-hal yang menghalangi kecakapan hukum ada dua macam:<br>1. 'Awaridh Samawiyah: Hal-hal yang datang dari Allah dan di luar pilihan serta usaha hamba {seperti gila (جنون), lupa (نسیان), tidur (نوم), perbudakan (رق), pikun (عته), haid, nifas, sakit, mati}.<br>2. 'Awaridh Muktasabah: Hal-hal yang padanya terdapat pilihan dan usaha hamba {seperti kebodohan (جهل), mabuk (سكر), senda gurau (هزل), kebodohan/kurang akal (سفه), bepergian (سفر), kesalahan (خطا), paksaan (اكراه)}."
        },
        {
            category: "55-72", originalNumber: 70, isDefinition: false,
            question: "Ada berapa macam Hurumat (حرمات) (hal-hal yang diharamkan) dan apa saja itu?",
            answer: "1. Yang sama sekali tidak ada rukhshah (keringanan) padanya {seperti pembunuhan dan zina}.<br>2. Yang memiliki kemungkinan gugur (keharamannya) {seperti (keharaman) khamr, bangkai, dan babi}.<br>3. Yang tidak memiliki kemungkinan gugur (keharamannya) namun memiliki kemungkinan rukhshah {seperti mengucapkan kalimat kufur dengan lisan saat dipaksa}.<br>4. Yang memiliki kemungkinan gugur (keharamannya) namun tidak gugur karena sebab uzur, tetapi memiliki kemungkinan rukhshah {seperti mengambil dan memakan harta orang lain (dalam kondisi darurat)}."
        },
        {
            category: "55-72", originalNumber: 71, isDefinition: true,
            question: "Apakah definisi Firasat (فراست), Hukum (حكم), dan Dalil (دليل)?",
            answer: "Firasat: <span lang='ar' dir='rtl'>هِيَ مَا يَقَعُ فِي الْقَلْبِ بِغَيْرِ نَظَرِ فِي حُجَّةٍ</span> Artinya: Sesuatu yang muncul di hati tanpa melihat kepada argumen/dalil.<br>Hukum: <span lang='ar' dir='rtl'>مَا ثَبَتَ جَبْرًا</span> Artinya: Sesuatu yang tetap secara paksa/pasti.<br>Dalil: <span lang='ar' dir='rtl'>مَا يُتَوَصَّلُ بِصِحَّةِ النَّظَرِ فِيهِ إِلَى الْعِلْمِ</span> Artinya: Sesuatu yang dengan pengamatan yang benar terhadapnya dapat mengantarkan kepada ilmu."
        },
        {
            category: "55-72", originalNumber: 72, isDefinition: true,
            question: "Apakah definisi 'Urf (عرف) dan 'Adat (عادت)?",
            answer: "'Urf adalah <span lang='ar' dir='rtl'>ما اشْتَهَرَ بِشَهَادَاتِ الْعُقُولِ وَ تَلَقَّتْهُ الطَّبَايِعُ السَّلِيمَةُ بِالْقَبُولِ</span><br>Artinya: Sesuatu yang terkenal melalui kesaksian akal sehat dan diterima oleh tabiat yang lurus.<br>'Adat adalah: <span lang='ar' dir='rtl'>مَا اسْتَمَرَّ النَّاسُ عَلَيْهِ وَ عَاوَدُوهُ</span><br>Artinya: Sesuatu yang manusia terus menerus melakukannya dan mengulanginya kembali."
        }
    ]
}; //

const uiStrings = {
    osmanlica: {
        pageTitle: "منار سواللری",
        mainTitle: "منار سواللری",
        showAnswerBtn: "جوابی کور",
        nextQuestionBtn: "ایلری",
        langToggleText: "ID", // Diubah
        questionPlaceholder: "بر كاتغورى سچڭ ویا \"بتون سواللردن\" دوکمەسنه باصڭ."
    },
    indonesia: {
        pageTitle: "Soal Jawab Kitab Manar",
        mainTitle: "Soal Jawab Kitab Manar",
        showAnswerBtn: "Lihat Jawaban",
        nextQuestionBtn: "Soal Berikutnya",
        langToggleText: "TR", // Diubah
        questionPlaceholder: "Pilih kategori atau tekan tombol \"Semua Soal\"."
    }
};

const questionTextElement = document.getElementById('questionText');
const answerTextElement = document.getElementById('answerText');
const answerContainer = document.getElementById('answerContainer');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const darkModeToggle = document.getElementById('darkModeToggle');
const languageToggleBtn = document.getElementById('languageToggleBtn');
const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainTitleElement = document.getElementById('mainTitle');
const pageTitleElement = document.getElementById('pageTitle');


let currentLanguage = 'osmanlica';
let currentActiveQuestions = [];
let currentQuestionData = null;
let displayedQuestionIndices = [];

function getInitialLanguage() {
    return localStorage.getItem('preferredLanguageMenar') || 'osmanlica';
}

// Fungsi bantuan untuk menutup sidebar jika terbuka di mode mobile
function closeSidebarIfOpen() {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
}

function updateLanguageUI(newLang, initialLoad = false) {
    currentLanguage = newLang;
    localStorage.setItem('preferredLanguageMenar', newLang);

    const htmlEl = document.documentElement;
    htmlEl.lang = newLang === 'osmanlica' ? 'ota' : 'id';
    htmlEl.dir = newLang === 'osmanlica' ? 'rtl' : 'ltr';

    pageTitleElement.textContent = uiStrings[newLang].pageTitle;
    mainTitleElement.textContent = uiStrings[newLang].mainTitle;
    showAnswerBtn.textContent = uiStrings[newLang].showAnswerBtn;
    nextQuestionBtn.textContent = uiStrings[newLang].nextQuestionBtn;
    languageToggleBtn.textContent = uiStrings[newLang].langToggleText;

    categoryBtns.forEach(btn => {
        const text = btn.getAttribute(`data-lang-${newLang}`);
        if (text) {
            btn.textContent = text;
        }
    });

    if (!initialLoad) {
        answerContainer.style.display = 'none';
        answerTextElement.innerHTML = "";

        const currentCategoryButton = document.querySelector('.category-btn.active-category');
        if (currentCategoryButton) {
            filterAndDisplayByCategory(currentCategoryButton.getAttribute('data-category'), false);
        } else {
            currentActiveQuestions = [];
            displayedQuestionIndices = [];
            currentQuestionData = null;
            questionTextElement.textContent = uiStrings[newLang].questionPlaceholder;
            showAnswerBtn.disabled = true;
            nextQuestionBtn.disabled = true;
        }
    } else {
         questionTextElement.textContent = uiStrings[newLang].questionPlaceholder;
         showAnswerBtn.disabled = true;
         nextQuestionBtn.disabled = true;
    }
}

function filterAndDisplayByCategory(categoryValue, closeMenuAfterFilter = true) {
    answerContainer.style.display = 'none';
    answerTextElement.innerHTML = "";
    displayedQuestionIndices = [];

    const questionsInCurrentLang = allQuestionsData[currentLanguage];

    if (categoryValue === 'all') {
        currentActiveQuestions = [...questionsInCurrentLang];
    } else if (categoryValue === 'definitions') {
        currentActiveQuestions = questionsInCurrentLang.filter(q => q.isDefinition === true);
    } else {
        const [start, end] = categoryValue.split('-').map(Number);
        currentActiveQuestions = questionsInCurrentLang.filter(q => q.originalNumber >= start && q.originalNumber <= end);
    }

    if (currentActiveQuestions && currentActiveQuestions.length > 0) {
        displayQuestion();
    } else {
        questionTextElement.textContent = (currentLanguage === 'indonesia' ? "Belum ada soal untuk kategori ini." : "بو كاتغوريده هنوز سوال یوخدر.");
        currentQuestionData = null;
        showAnswerBtn.disabled = true;
        nextQuestionBtn.disabled = true;
    }

    if (closeMenuAfterFilter) {
        closeSidebarIfOpen();
    }
}


function getRandomQuestion() {
    if (!currentActiveQuestions || currentActiveQuestions.length === 0) {
        questionTextElement.textContent = uiStrings[currentLanguage].questionPlaceholder;
        answerTextElement.innerHTML = "";
        showAnswerBtn.disabled = true;
        nextQuestionBtn.disabled = true;
        return null;
    }

    if (displayedQuestionIndices.length === currentActiveQuestions.length) {
        displayedQuestionIndices = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * currentActiveQuestions.length);
    } while (displayedQuestionIndices.includes(randomIndex));

    displayedQuestionIndices.push(randomIndex);
    return currentActiveQuestions[randomIndex];
}

function displayQuestion() {
    answerContainer.style.display = 'none';
    answerTextElement.innerHTML = "";
    currentQuestionData = getRandomQuestion();

    if (currentQuestionData) {
        questionTextElement.textContent = currentQuestionData.question;
        showAnswerBtn.disabled = false;
        nextQuestionBtn.disabled = false;
    } else {
        if (currentActiveQuestions && currentActiveQuestions.length > 0 && displayedQuestionIndices.length === currentActiveQuestions.length) {
             questionTextElement.textContent = (currentLanguage === 'indonesia' ? "Semua soal di kategori ini telah ditampilkan. Pilih kategori lain atau acak lagi." : "بو كاتغوريده بتون سواللر كورستریلدی. باشقا بر كاتغورى سچكز ویا تكرار آچقلايڭ.");
        } else {
            questionTextElement.textContent = uiStrings[currentLanguage].questionPlaceholder;
        }
        showAnswerBtn.disabled = true;
    }
}

showAnswerBtn.addEventListener('click', () => {
    if (currentQuestionData) {
        answerTextElement.innerHTML = currentQuestionData.answer;
        answerContainer.style.display = 'block';
    }
    closeSidebarIfOpen();
});

nextQuestionBtn.addEventListener('click', () => {
    displayQuestion();
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active-category'));
        btn.classList.add('active-category');
        const categoryValue = btn.getAttribute('data-category');
        filterAndDisplayByCategory(categoryValue, false); // false = JANGAN tutup sidebar saat klik kategori
    });
});

darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeMenar', newTheme);
});

languageToggleBtn.addEventListener('click', () => {
    const newLang = currentLanguage === 'osmanlica' ? 'indonesia' : 'osmanlica';
    updateLanguageUI(newLang);
    closeSidebarIfOpen();
});

hamburgerBtn.addEventListener('click', (event) => {
    sidebar.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        !hamburgerBtn.contains(event.target)
        ) {
        sidebar.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = getInitialLanguage();
    updateLanguageUI(currentLanguage, true);

    const initialTheme = localStorage.getItem('themeMenar') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
});