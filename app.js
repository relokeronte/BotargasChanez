document.addEventListener('DOMContentLoaded', () => {
    // 1. WhatsApp Configuration
    const whatsappPhone = '525561895628';
    
    // Function to generate WhatsApp link
    const generateWhatsAppLink = (message) => {
        const encodedText = encodeURIComponent(message);
        return `https://wa.me/${whatsappPhone}?text=${encodedText}`;
    };

    // 2. Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Hero Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let timer;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    };

    const resetTimer = () => {
        clearInterval(timer);
        timer = setInterval(nextSlide, slideInterval);
    };

    // Initialize carousel timer
    timer = setInterval(nextSlide, slideInterval);

    // Click events on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // 4. Mobile Navigation Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'var(--white)';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = 'var(--shadow-md)';
                navMenu.style.gap = '15px';
                navMenu.style.borderBottom = '2px solid var(--primary)';
            }
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'row';
                navMenu.style.position = 'static';
                navMenu.style.boxShadow = 'none';
                navMenu.style.padding = '0';
                navMenu.style.borderBottom = 'none';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }

    // 5. Products Data
    const products = [
        {
            title: "Bala Plateada",
            desc: "Botarga publicitaria en forma de cápsula o bala plateada con detalles aerodinámicos. Ideal para promociones industriales.",
            image: "assets/bala_bricks.png",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Barrita Energética",
            desc: "Botarga de barra de cereal/snack con empaque colorido. Perfecta para activaciones de marcas de alimentos.",
            image: "assets/Barrita.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Beli y Beto",
            desc: "Botargas de los famosos personajes infantiles Beli y Beto, con gran detalle en sus expresiones y vestuarios.",
            image: "assets/Beli Beto.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Búho Sabio",
            desc: "Botarga de búho con plumas detalladas y expresión intelectual. Ideal para escuelas y graduaciones.",
            image: "assets/Bhuo.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Bluey",
            desc: "Botarga de la simpática perrita azul Bluey. Excelente para fiestas infantiles y shows de animación.",
            image: "assets/Blui.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Bolsa de Compras",
            desc: "Botarga en forma de bolsa de mandado o ecológica. Perfecta para supermercados y tiendas departamentales.",
            image: "assets/Bolsa.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Caine Circus",
            desc: "Botarga del carismático presentador Caine de Digital Circus, con su icónica cabeza de dientes y ojos flotantes.",
            image: "assets/Caine.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Celda Solar",
            desc: "Botarga publicitaria de panel o celda solar. Ideal para empresas de energía limpia y sustentable.",
            image: "assets/Celda Solar.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Súper Chef",
            desc: "Botarga de chef profesional con bigote y filipina blanca. Excelente para restaurantes y eventos culinarios.",
            image: "assets/Chef.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Chuleta de Carne",
            desc: "Divertida botarga en forma de chuleta de carne fresca. Ideal para carnicerías, asados y restaurantes de carne.",
            image: "assets/Chuleta.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Cinnamoroll",
            desc: "Botarga del tierno perrito blanco Cinnamoroll de Sanrio, con orejas grandes y pelaje suave.",
            image: "assets/Cinamon.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Cono de Helado",
            desc: "Botarga de cono de helado con bola de fresa y chispas. Perfecta para heladerías y postrerías.",
            image: "assets/Cono Helado.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Planeta Corazón",
            desc: "Botarga de corazón con aspecto de planeta y anillos. Ideal para campañas de amor y cuidado ambiental.",
            image: "assets/Corazon Planeta.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "DJ Auriculares",
            desc: "Botarga festiva con auriculares gigantes. Excelente para antros, discotecas y activaciones musicales.",
            image: "assets/DJ.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Circo Digital Pomni",
            desc: "Botarga inspirada en Pomni de Digital Circus, con su gorro de bufón de colores y expresión tímida.",
            image: "assets/DigitalCircus.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Engrane Mecánico",
            desc: "Botarga en forma de engrane dentado industrial. Ideal para talleres mecánicos y ferreterías.",
            image: "assets/Engrane.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Monstruo Malvado",
            desc: "Botarga de personaje de fantasía oscuro y misterioso. Perfecta para Halloween y casas de terror.",
            image: "assets/Evil.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Gota de Agua",
            desc: "Botarga en forma de gota de agua azul brillante. Excelente para campañas de concientización ecológica.",
            image: "assets/Gota.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Helado Doble",
            desc: "Botarga de barquillo de helado con dos sabores. Ideal para heladerías y promociones infantiles.",
            image: "assets/Helado 2.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Jitomate Fresco",
            desc: "Botarga redonda de jitomate rojo vivo con sombrero de sépalos verdes. Ideal para marcas agrícolas.",
            image: "assets/jitomate_bricks.png",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Limón Feliz",
            desc: "Botarga de limón verde cítrico y sonriente. Perfecta para fruterías y marcas de bebidas.",
            image: "assets/Limon.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Mariachi de Gala",
            desc: "Botarga de mariachi con traje de charro tradicional bordado en dorado. Ideal para restaurantes y eventos.",
            image: "assets/mariachi_mexicano_bricks.png",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Mariachi Olla",
            desc: "Botarga publicitaria de olla vestida de mariachi mexicano. Excelente para marcas de comida típica.",
            image: "assets/Maricahi Olla.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Mecánico Experto",
            desc: "Botarga de mecánico de autos con overol de trabajo. Ideal para talleres y refaccionarias.",
            image: "assets/Mecanico.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Steve Minecraft",
            desc: "Botarga de Steve en bloques pixelados tridimensionales. Un éxito garantizado en fiestas y eventos de videojuegos.",
            image: "assets/MineCraft.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "La Monja",
            desc: "Botarga inspirada en el famoso personaje de terror, ideal para ferias y activaciones de espantos.",
            image: "assets/Monja.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Monster Azul",
            desc: "Divertida botarga de monstruo azul peludo con expresión graciosa. Ideal para animaciones infantiles.",
            image: "assets/Monster.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Comegalletas",
            desc: "Botarga del adorable y clásico monstruo comegalletas de pelaje azul y ojos saltones.",
            image: "assets/Monstruo.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Muela Feliz",
            desc: "Botarga de muela blanca brillante con una gran sonrisa. Excelente para clínicas dentales.",
            image: "assets/muela_bricks.png",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Pantera Rosa",
            desc: "Botarga de la elegante y clásica Pantera Rosa, con un diseño fiel y estilizado.",
            image: "assets/Pantera Rosa.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Patito de Goma",
            desc: "Botarga de patito amarillo de hule. Excelente para albercas, jugueterías y shows infantiles.",
            image: "assets/Patos.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Perrito Amigable",
            desc: "Botarga de perro café esponjoso con expresión tierna y orejas caídas.",
            image: "assets/Perro.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Caja de Palomitas",
            desc: "Botarga en forma de caja de palomitas de maíz a rayas rojas y blancas. Ideal para cines y ferias.",
            image: "assets/Pop Conrs.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Princesa de Cuento",
            desc: "Botarga de princesa de cuentos de hadas con vestido elegante y corona dorada.",
            image: "assets/Princesa.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Rana Saltarina",
            desc: "Divertido personaje de rana verde sonriente con playera amarilla. Ideal para espectáculos infantiles.",
            image: "assets/rana_bricks.png",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Sol Radiante",
            desc: "Botarga de sol amarillo sonriente con rayos alrededor. Excelente para escuelas y eventos infantiles.",
            image: "assets/Sol.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Mascota Solvato",
            desc: "Botarga corporativa personalizada con detalles bordados a mano. Ideal para activaciones empresariales.",
            image: "assets/Solvato.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Astronauta de Gala",
            desc: "Botarga de astronauta con traje espacial detallado y casco brillante. Ideal para ferias científicas.",
            image: "assets/SpaceMan.jpeg",
            category: "deportivos",
            tag: "Deportivo"
        },
        {
            title: "Tigre Fiero",
            desc: "Botarga deportiva de tigre de bengala con expresión poderosa. Ideal como mascota de equipos deportivos.",
            image: "assets/Tigre GC.jpeg",
            category: "deportivos",
            tag: "Deportivo"
        },
        {
            title: "Bailarina Valerina",
            desc: "Botarga de bailarina clásica con tutú rosa y zapatillas de ballet. Excelente para academias de danza.",
            image: "assets/Valerina.jpeg",
            category: "animados",
            tag: "Animado"
        },
        {
            title: "Conejito de Marca",
            desc: "Botarga publicitaria de conejo corporativo diseñada a medida según los requerimientos de la marca.",
            image: "assets/WhatsApp Image 2026-06-04 at 7.37.02 PM.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "León de Marca",
            desc: "Botarga publicitaria de león corporativo con traje a medida para activaciones empresariales.",
            image: "assets/WhatsApp Image 2026-06-04 at 7.45.02 PM.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Mazorca de Maíz",
            desc: "Botarga en forma de elote o mazorca de maíz tierno. Excelente para marcas agrícolas y ferias gastronómicas.",
            image: "assets/maiz.jpeg",
            category: "corporativos",
            tag: "Corporativo"
        },
        {
            title: "Astronauta Explorer",
            desc: "Botarga de explorador espacial con mochila de soporte vital. Perfecta para eventos de ciencia y tecnología.",
            image: "assets/spaceMan 2.jpeg",
            category: "deportivos",
            tag: "Deportivo"
        },
        {
            title: "Stitch",
            desc: "Botarga de alienígena azul Stitch, con detalles en orejas y pelaje súper suave. Un favorito para fiestas.",
            image: "assets/stich.jpeg",
            category: "animados",
            tag: "Animado"
        }
    ];

    const catalogGrid = document.getElementById('catalog-grid');

    // 5. Watermark: Embed company name into product images via Canvas
    const applyWatermark = () => {
        const productImages = document.querySelectorAll('.item-img-container img');

        productImages.forEach(img => {
            const processImage = () => {
                if (img.dataset.watermarked === 'true') return;
                img.dataset.watermarked = 'true';

                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');

                // Draw original image
                ctx.drawImage(img, 0, 0);

                // Add a stylish diagonal text watermark "Botargas Chánez" in the center
                const fontSize = canvas.width * 0.075; // ~7.5% of the image width
                ctx.font = `bold ${fontSize}px sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                ctx.save();
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate(-30 * Math.PI / 180);

                ctx.globalAlpha = 0.35;
                ctx.fillStyle = '#FFFFFF';
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.lineWidth = Math.max(2, canvas.width * 0.004);

                ctx.strokeText('Botargas Chánez', 0, 0);
                ctx.fillText('Botargas Chánez', 0, 0);
                ctx.restore();

                try {
                    img.src = canvas.toDataURL('image/jpeg', 0.95);
                } catch (e) {
                    console.warn('Watermark could not be applied:', e);
                }
                
                img.removeEventListener('load', processImage);
            };

            if (img.complete && img.naturalWidth > 0) {
                processImage();
            } else {
                img.addEventListener('load', processImage);
            }
        });
    };

    // 6. Render products dynamically
    const renderProducts = (filterValue = 'all') => {
        if (!catalogGrid) return;
        catalogGrid.innerHTML = '';

        const filteredProducts = products.filter(product => {
            return filterValue === 'all' || product.category === filterValue;
        });

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'catalog-item';
            card.setAttribute('data-category', product.category);

            card.innerHTML = `
                <div class="item-img-container">
                    <span class="item-tag">${product.tag}</span>
                    <img src="${product.image}" alt="Botarga de ${product.title}">
                </div>
                <div class="item-info">
                    <h3 class="item-title">${product.title}</h3>
                    <p class="item-desc">${product.desc}</p>
                    <div class="item-footer">
                        <a href="#" class="btn-whatsapp-sm" data-wa-action="catalog-item" data-item-name="${product.title}">
                            Cotizar 📲
                        </a>
                        <a href="#" class="btn-download-sm" data-download-btn>
                            Descargar 📥
                        </a>
                    </div>
                </div>
            `;
            catalogGrid.appendChild(card);
        });

        // Re-attach WhatsApp click events for catalog items
        const contactButtons = catalogGrid.querySelectorAll('[data-wa-action="catalog-item"]');
        contactButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const itemName = button.getAttribute('data-item-name');
                const message = `¡Hola Botargas Chanez! Me interesa cotizar y obtener más información sobre la botarga de: "${itemName}".`;
                const url = generateWhatsAppLink(message);
                window.open(url, '_blank');
            });
        });

        // Re-attach download click events
        const downloadButtons = catalogGrid.querySelectorAll('[data-download-btn]');
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const catalogItem = button.closest('.catalog-item');
                if (catalogItem) {
                    const img = catalogItem.querySelector('.item-img-container img');
                    const titleEl = catalogItem.querySelector('.item-title');
                    if (img && img.src) {
                        const a = document.createElement('a');
                        a.href = img.src;
                        const titleText = titleEl ? titleEl.textContent.trim().toLowerCase().replace(/\s+/g, '-') : 'producto';
                        a.download = `botargas-chanez-${titleText}.jpg`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                }
            });
        });

        // Apply watermark
        applyWatermark();
    };

    // 7. General WhatsApp Contact Handlers
    const setupGeneralWhatsApp = () => {
        const generalButtons = document.querySelectorAll('[data-wa-action]:not([data-wa-action="catalog-item"])');
        generalButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const action = button.getAttribute('data-wa-action');
                let message = '';
                if (action === 'custom-inquiry') {
                    message = '¡Hola Botargas Chanez! Quisiera platicarles sobre una idea de botarga personalizada que tengo en mente para cotizar su fabricación.';
                } else if (action === 'general-contact') {
                    message = '¡Hola Botargas Chanez! Me gustaría ponerme en contacto con ustedes para realizar unas preguntas generales.';
                }
                if (message) {
                    const url = generateWhatsAppLink(message);
                    window.open(url, '_blank');
                }
            });
        });
    };

    // 8. Catalog Filtering Buttons Click
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // Initial load
    renderProducts('all');
    setupGeneralWhatsApp();
});
