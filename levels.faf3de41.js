const o=[{idName:"0",answer:"мівіна",logoHidden:"http://programki.com.ua/uploads/posts/2023-01/1675102824_mivina.png",logo:"http://programki.com.ua/uploads/posts/2023-01/1675102805_mivina-2.png",info:"Мівіна – товарний знак, розроблений у Харкові корпорацією «Техноком», що займається виробництвом харчових напівфабрикатів.«Мівіна» є загальною назвою вермішелі швидкого приготування в українських споживачів"},{idName:"1",answer:"пакко",logoHidden:"http://programki.com.ua/uploads/posts/2023-01/1675102784_pakko-open.jpg",logo:"http://programki.com.ua/uploads/posts/2023-01/1675102762_6649028-pakko.jpg",info:"«Вопак» — західноукраїнська торгова мережа. Загальна кількість магазинів у мережі 67 супермаркетів. Вони розташовані у Львівській, Тернопільській, Івано-Франківській, Чернівецькій, Закарпатській, Волинській, Житомирській та Хмельницькій областях."},{idName:"2",answer:"опілля",logoHidden:"http://programki.com.ua/uploads/posts/2023-01/1675102817_opillia-open.jpg",logo:"http://programki.com.ua/uploads/posts/2023-01/1675102746_opillia.png",info:"Тернопільська пивоварня «Опілля» — підприємство, зайняте у галузі виробництва та реалізації пива та квасу. Розташоване у місті Тернополі."},{idName:"3",answer:"садочок",logoHidden:"http://programki.com.ua/uploads/posts/2023-01/1675102817_sadochok-open.jpg",logo:"http://programki.com.ua/uploads/posts/2023-01/1675102807_sadochok.png",info:"ТМ «Садочок» — це бренд фруктових та плодоовочевих соків, нектарів, морсів. Виробник  — PepsiCo. Продукція виробляється на заводі з переробки фруктів, овочів та виробництві соків (Миколаївська обл.), заводі з виробництва соків (Миколаївська обл.), двох заводів з переробки фруктів та овочів (Крим та Херсонська обл.)."},{idName:"4",answer:"рошен",logoHidden:"http://programki.com.ua/uploads/posts/2023-01/1675102755_roshen-open.jpg",logo:"https://harchi.info/files/companies/roshen_logo.png",info:"Конди́терська корпора́ція «Роше́н» — один з найбільших виробників кондитерських виробів в Україні та Східній Європі, входить у тридцятку найбільших виробників кондитерських виробів світу. Головний офіс компанії розташовано у Києві.Назва походить з прізвища її засновника — Петра Порошенка шляхом вилучення першого та останнього складів."}];let p=o.length,a=[];for(let s=0;s<p;s++){const{answer:p}=o[s],t=localStorage.getItem(`${p}`);t&&a.splice(0,0,t)}document.querySelector(".answerLogoLevel").textContent=`${a.length}`;
//# sourceMappingURL=levels.faf3de41.js.map
