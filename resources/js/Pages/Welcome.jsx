import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroRef = useRef(null);
    const navRef = useRef(null);
    const aboutRef = useRef(null);
    const featuresRef = useRef(null);
    const programsRef = useRef(null);

    // GSAP Animations
    useEffect(() => {
        // Navbar animation on page load
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut"
        });

        // Hero section animations
        gsap.from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.inOut"
        });

        gsap.from(".hero-subtitle", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.inOut"
        });

        gsap.from(".hero-buttons", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.8,
            ease: "power2.inOut"
        });

        // About section animation on scroll
        gsap.from(".about-content", {
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        });

        gsap.from(".about-image", {
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        });

        // Features cards stagger animation
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.inOut"
        });

        // Programs animation
        gsap.from(".program-card", {
            scrollTrigger: {
                trigger: programsRef.current,
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.inOut"
        });

        // Cleanup ScrollTrigger instances on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            {/* Navbar */}
            <nav
                ref={navRef}
                className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm py-4"
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <div
                        className="text-2xl font-bold text-blue-700 cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        <span className="text-blue-900">Sekolah</span><span className="text-blue-500">Maju</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                        >
                            Tentang
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                        >
                            Keunggulan
                        </button>
                        <button
                            onClick={() => scrollToSection('programs')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                        >
                            Program
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                        >
                            Kontak
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md">
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/90 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg py-4 px-4">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            >
                                Tentang
                            </button>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            >
                                Keunggulan
                            </button>
                            <button
                                onClick={() => scrollToSection('programs')}
                                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            >
                                Program
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                            >
                                Kontak
                            </button>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 mt-2">
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                ref={heroRef}
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
            >
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        <span className="text-blue-800">Sekolah</span> <span className="text-blue-600">Maju</span>
                        <span className="text-blue-400"> Berkualitas</span>
                    </h1>

                    <p className="hero-subtitle text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
                        Menyiapkan Generasi Unggul dengan Pendidikan Berkualitas, Berkarakter, dan Berwawasan Global
                    </p>

                    <div className="hero-buttons flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Daftar Sekarang
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Profil Sekolah
                        </button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20"></div>
                <div className="absolute top-20 right-10 w-32 h-32 bg-indigo-300 rounded-full opacity-20"></div>
                <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
            </section>

            {/* About Section */}
            <section
                id="about"
                ref={aboutRef}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Tentang Sekolah Kami</h2>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="about-content md:w-1/2">
                            <p className="text-lg text-gray-700 mb-6">
                                <span className="font-bold text-blue-700 text-xl">Sekolah Maju Berkualitas</span> merupakan lembaga pendidikan yang telah berdiri sejak tahun 1995 dengan komitmen untuk memberikan pendidikan terbaik bagi generasi penerus bangsa.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Kami menerapkan kurikulum nasional yang diperkaya dengan pendekatan pembelajaran modern, teknologi terkini, dan pengembangan karakter siswa secara holistik.
                            </p>
                            <p className="text-lg text-gray-700">
                                Visi kami adalah menjadi sekolah unggulan yang mencetak lulusan berprestasi, berakhlak mulia, dan siap menghadapi tantangan global di abad ke-21.
                            </p>
                        </div>

                        <div className="about-image md:w-1/2">
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-2 shadow-2xl">
                                <div className="bg-white rounded-xl p-6 shadow-inner">
                                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                                        <div className="bg-blue-50 p-4 rounded-lg flex-1 text-center">
                                            <div className="text-3xl font-bold text-blue-700">1.200+</div>
                                            <div className="text-gray-600">Siswa Aktif</div>
                                        </div>
                                        <div className="bg-indigo-50 p-4 rounded-lg flex-1 text-center">
                                            <div className="text-3xl font-bold text-blue-700">80+</div>
                                            <div className="text-gray-600">Guru Berpengalaman</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg flex-1 text-center">
                                            <div className="text-3xl font-bold text-blue-700">25+</div>
                                            <div className="text-gray-600">Program Ekstrakurikuler</div>
                                        </div>
                                        <div className="bg-indigo-50 p-4 rounded-lg flex-1 text-center">
                                            <div className="text-3xl font-bold text-blue-700">95%</div>
                                            <div className="text-gray-600">Kelulusan ke PTN</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                ref={featuresRef}
                className="py-20 bg-gradient-to-b from-blue-50 to-white"
            >
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Keunggulan Sekolah</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature Card 1 */}
                        <div className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-blue-600">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Prestasi Akademik</h3>
                            <p className="text-gray-700">
                                Konsisten meraih peringkat tertinggi dalam ujian nasional dengan rata-rata nilai di atas standar nasional.
                            </p>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-blue-600">👨‍🏫</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Guru Berkualitas</h3>
                            <p className="text-gray-700">
                                Tenaga pendidik bersertifikasi dengan pengalaman mengajar minimal 5 tahun dan pelatihan berkala.
                            </p>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-blue-600">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Teknologi Pendidikan</h3>
                            <p className="text-gray-700">
                                Fasilitas lengkap dengan lab komputer, smart classroom, dan akses digital library untuk mendukung pembelajaran modern.
                            </p>
                        </div>

                        {/* Feature Card 4 */}
                        <div className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-blue-600">🏀</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Ekstrakurikuler Lengkap</h3>
                            <p className="text-gray-700">
                                Beragam pilihan ekstrakurikuler olahraga, seni, dan sains untuk mengembangkan bakat dan minat siswa.
                            </p>
                        </div>

                        {/* Feature Card 5 */}
                        <div className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-blue-600">🌍</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Program Internasional</h3>
                            <p className="text-gray-700">
                                Kemitraan dengan sekolah luar negeri dan program student exchange untuk pengalaman belajar global.
                            </p>
                        </div>

                        {/* Feature Card 6 */}
                        <div className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl text-blue-600">❤️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Pengembangan Karakter</h3>
                            <p className="text-gray-700">
                                Program pembentukan karakter dengan nilai-nilai kejujuran, tanggung jawab, dan kepedulian sosial.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section
                id="programs"
                ref={programsRef}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Program & Jurusan</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Program Card 1 */}
                        <div className="program-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 hover:border-blue-400">
                            <div className="text-4xl mb-4 text-blue-600">🔬</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">IPA (Ilmu Pengetahuan Alam)</h3>
                            <p className="text-gray-700 mb-4">
                                Program khusus dengan penekanan pada sains, matematika, dan teknologi untuk persiapan masuk perguruan tinggi bidang sains dan teknologi.
                            </p>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Laboratorium sains lengkap</li>
                                <li>• Program riset siswa</li>
                                <li>• Olimpiade sains nasional</li>
                            </ul>
                        </div>

                        {/* Program Card 2 */}
                        <div className="program-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 hover:border-blue-400">
                            <div className="text-4xl mb-4 text-blue-600">📚</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">IPS (Ilmu Pengetahuan Sosial)</h3>
                            <p className="text-gray-700 mb-4">
                                Program yang mengembangkan pemahaman tentang masyarakat, ekonomi, dan budaya dengan pendekatan analitis dan kritis.
                            </p>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Studi lapangan dan kunjungan</li>
                                <li>• Debat dan public speaking</li>
                                <li>• Kewirausahaan sosial</li>
                            </ul>
                        </div>

                        {/* Program Card 3 */}
                        <div className="program-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 hover:border-blue-400">
                            <div className="text-4xl mb-4 text-blue-600">🌐</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Bahasa & Budaya</h3>
                            <p className="text-gray-700 mb-4">
                                Program intensif dengan fokus pada penguasaan bahasa asing dan pemahaman budaya internasional.
                            </p>
                            <ul className="text-gray-600 space-y-1">
                                <li>• Bahasa Inggris, Mandarin, Jepang</li>
                                <li>• Pertukaran pelajar</li>
                                <li>• Program budaya internasional</li>
                            </ul>
                        </div>
                    </div>

                    {/* Additional Programs Info */}
                    <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Program Unggulan Lainnya</h3>
                        <p className="mb-6 max-w-2xl mx-auto">
                            Selain program akademik utama, kami juga menyediakan program khusus seperti Kelas Akselerasi, Kelas Inklusi, dan Program Keterampilan.
                        </p>
                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                            Lihat Selengkapnya
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact/Footer Section */}
            <footer
                id="contact"
                className="bg-gray-900 text-white py-12"
            >
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="mb-6 md:mb-0">
                            <div className="text-3xl font-bold mb-2">
                                <span className="text-blue-300">Sekolah</span><span className="text-white">Maju</span>
                            </div>
                            <p className="text-gray-300">Menyiapkan Generasi Unggul untuk Masa Depan</p>
                        </div>

                        <div className="text-center md:text-right">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md mb-4">
                                Login Siswa/Guru
                            </button>
                            <p className="text-gray-400 text-sm">
                                *Login untuk mengakses portal akademik
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400">
                                Jl. Pendidikan No. 123, Kota Maju, Indonesia
                            </p>
                            <p className="text-gray-400">Telepon: (021) 1234-5678 | Email: info@sekolahmaju.sch.id</p>
                        </div>

                        <div className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Sekolah Maju Berkualitas. Semua hak dilindungi.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;