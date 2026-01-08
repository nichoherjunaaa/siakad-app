import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FaUser, FaLock, FaGraduationCap, FaSchool, FaUsers, FaChalkboardTeacher, FaUserGraduate, FaUserFriends } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4 overflow-hidden">
            <Head title="Login - Sistem Informasi Sekolah Insan Mulia" />

            <div className={`w-full ${isMobile ? 'max-w-md h-auto' : 'max-w-5xl h-[600px]'} flex bg-white rounded-3xl shadow-2xl overflow-hidden`}>

                {!isMobile && (
                    <div className="w-2/5 bg-gradient-to-b from-primary-dark to-primary p-10 text-white flex flex-col">
                        <div className="flex items-center mb-8">
                            <img src="/images/logo/logo.png" alt="" className='w-20 h-20 rounded-full mr-4'/>
                            <div>
                                <h1 className="text-2xl font-bold">SMP INSAN MULIA</h1>
                                <p className="text-neutral-400 text-sm">Sekolah Berkarakter</p>
                            </div>
                        </div>

                        <div className="flex-grow">
                            <h2 className="text-3xl font-bold mb-4 mt-10">
                                Selamat Datang di<br />Sistem Informasi Sekolah
                            </h2>
                            <p className="text-neutral-400 mb-8">
                                Akses lengkap informasi akademik, administrasi, dan kegiatan sekolah dalam satu platform terintegrasi.
                            </p>
                        </div>

                        <div className="text-center text-neutral-400 text-sm pt-4 border-t border-neutral-200">
                            <p>© {new Date().getFullYear()} Sekolah Menengah Pertama Insan Mulia</p>
                            <p className="mt-1">v2.1.0 - Sistem Terintegrasi</p>
                        </div>
                    </div>
                )}

                <div className={`${isMobile ? 'w-full p-6' : 'w-3/5 p-10'} flex flex-col justify-center`}>
                    {isMobile && (
                        <div className="text-center mb-6">
                            <div className="flex justify-center mb-4">
                                <img src="/images/logo/logo.png" alt="" className='w-1/2 h-1/2 rounded-full' />
                            </div>
                            <p className="text-neutral-600 text-md">Sistem Informasi Sekolah</p>
                        </div>
                    )}

                    <div className="max-w-md mx-auto w-full">
                        {status && (
                            <div className="mb-6 rounded-xl bg-success-light p-4 text-sm font-medium text-success border border-success">
                                {status}
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-neutral-900`}>
                                Masuk ke Akun Anda
                            </h3>
                            <p className="text-neutral-600 mt-2 text-sm">
                                Gunakan kredensial yang diberikan sekolah
                            </p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    value="Email"
                                    className="text-neutral-700 font-medium text-sm"
                                />
                                <div className="relative mt-2">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaUser className="h-5 w-5 text-neutral-400" />
                                    </div>
                                    <TextInput
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className={`w-full ${isMobile ? 'pl-10 py-3' : 'pl-12 py-3'} rounded-xl border-neutral-300 focus:border-primary focus:ring-primary text-sm`}
                                        placeholder="cth: email@insanmulia.sch.id"
                                        autoComplete="email"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-2 text-sm" />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        className="text-neutral-700 font-medium text-sm"
                                    />
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-primary hover:text-primary-dark hover:underline text-xs"
                                        >
                                            Lupa Password?
                                        </Link>
                                    )}
                                </div>
                                <div className="relative mt-2">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaLock className="h-5 w-5 text-neutral-400" />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className={`w-full ${isMobile ? 'pl-10 py-3' : 'pl-12 py-3'} rounded-xl border-neutral-300 focus:border-primary focus:ring-primary text-sm`}
                                        placeholder="Masukkan password akun"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </div>
                                <InputError message={errors.password} className="mt-2 text-sm" />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4"
                                />
                                <span className="ms-3 text-neutral-700 text-sm">
                                    Ingat perangkat ini
                                </span>
                            </div>

                            {/* Login Button */}
                            <div>
                                <PrimaryButton
                                    className={`w-full justify-center ${isMobile ? 'py-3 text-base' : 'py-3.5 text-lg'} font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary-dark`}
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Memproses...
                                        </span>
                                    ) : (
                                        'MASUK'
                                    )}
                                </PrimaryButton>
                            </div>

                        </form>
                        {/* Support Info */}
                        <div className="mt-8 text-center">
                            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-neutral-600`}>
                                Butuh bantuan?{' '}
                                <Link href="/contact" className="text-primary font-medium hover:underline">
                                    Hubungi Admin IT
                                </Link>
                            </p>
                        </div>

                        {/* Mobile Copyright - Only show on mobile */}
                        {isMobile && (
                            <div className="mt-6 text-center text-neutral-500 text-xs">
                                <p>© {new Date().getFullYear()} Sekolah Menengah Pertama Insan Mulia</p>
                                <p className="mt-1">v2.1.0 - Sistem Terintegrasi</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}