        // مصفوفة الأسئلة
        const quizData = [
            { q: "أين ولد السيد المسيح؟", a: ["الناصرة", "بيت لحم", "مصر", "أريحا"], c: 1 },
            { q: "ماذا قدم المجوس للملك؟", a: ["لبان", "مر", "ذهب", "ثياب"], c: 2 },
            { q: "من هو الملاك الذي بشر مريم؟", a: ["ميخائيل", "غبريال", "رافائيل", "نوريال"], c: 1 },
            { q: "أين وضع يسوع بعد ولادته؟", a: ["سرير", "كرسي", "مذود", "خيمة"], c: 2 },
            { q: "من أول من عرف بالميلاد؟", a: ["الملوك", "الرعاة", "الكهنة", "الفريسيون"], c: 1 },
            { q: "إلى أين هربت العائلة المقدسة؟", a: ["سوريا", "الأردن", "مصر", "روما"], c: 2 },
            { q: "ماذا أرشد المجوس؟", a: ["نجم", "حلم", "كتاب", "صوت"], c: 0 },
            { q: "ما مهنة يوسف النجار؟", a: ["صياد", "راعي", "نجار", "حداد"], c: 2 },
            { q: "من هو الملك وقتها؟", a: ["بيلاطس", "هيرودس", "نيرون", "أغسطس"], c: 1 },
            { q: "معنى اسم عمانوئيل؟", a: ["الله يحبنا", "الله معنا", "الله قوتنا", "المخلص"], c: 1 }
        ];

        let current = 0;
        let score = 0;

        const qEl = document.getElementById("q-text");
        const optEl = document.getElementById("options-grid");
        const nextBtn = document.getElementById("next-btn");

        function load() {
            const data = quizData[current];
            qEl.innerText = data.q;
            optEl.innerHTML = "";
            nextBtn.style.display = "none";

            data.a.forEach((ans, i) => {
                const div = document.createElement("div");
                div.className = "option";
                div.innerText = ans;
                div.onclick = () => check(div, i);
                optEl.appendChild(div);
            });
        }

        function check(div, i) {
            const correct = quizData[current].c;
            const all = document.querySelectorAll(".option");
            all.forEach(d => d.classList.add("disabled"));

            if(i === correct) {
                div.classList.add("correct");
                score++;
            } else {
                div.classList.add("wrong");
                all[correct].classList.add("correct");
            }
            nextBtn.style.display = "block";
        }

        nextBtn.onclick = () => {
            current++;
            if(current < quizData.length) {
                load();
            } else {
                document.getElementById("q-text").style.display = "none";
                optEl.style.display = "none";
                nextBtn.style.display = "none";
                document.getElementById("result").style.display = "block";
                document.getElementById("final-score").innerText = score + " من 10";
            }
        };

        // تشغيل الكود فوراً
        load();
