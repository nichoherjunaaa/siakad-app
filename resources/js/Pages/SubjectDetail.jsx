// resources/js/Pages/SubjectDetail.jsx
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import SubjectHeader from '@/Components/SubjectDetail/SubjectHeader';
import SubjectNavigation from '@/Components/SubjectDetail/SubjectNavigation';
import MaterialsSection from '@/Components/SubjectDetail/MaterialsSection';
import AssignmentsSection from '@/Components/SubjectDetail/AssignmentsSection';
import AnnouncementsSection from '@/Components/SubjectDetail/AnnouncementsSection';
import DiscussionSection from '@/Components/SubjectDetail/DiscussionSection';
import GradeOverview from '@/Components/SubjectDetail/GradeOverview';
import { useState } from 'react';

export default function SubjectDetail({ auth, subject }) {
    const userData = {
        role: 'siswa', // Bisa diubah: 'guru', 'orangtua'
        name: 'Ahmad Rizki',
        id: 'SM2024001',
        class: 'XII IPA 1',
        academicYear: '2023/2024',
        semester: 'Genap'
    };

    const [activeTab, setActiveTab] = useState('materials');

    const renderContent = () => {
        switch (activeTab) {
            case 'materials':
                return <MaterialsSection />;
            case 'assignments':
                return <AssignmentsSection />;
            case 'announcements':
                return <AnnouncementsSection />;
            case 'discussions':
                return <DiscussionSection />;
            default:
                return <MaterialsSection />;
        }
    };

    const renderSidebar = () => {
        // Hanya tampilkan sidebar untuk tabs tertentu
        if (['materials', 'assignments', 'announcements', 'discussions'].includes(activeTab)) {
            return (
                <div className="space-y-6">
                    <GradeOverview />
                    {/* Tambahkan widget sidebar lainnya di sini */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                        <h4 className="font-medium text-neutral-900 mb-4">Upcoming Deadlines</h4>
                        <div className="space-y-3">
                            <div className="p-3 bg-yellow-50 rounded-lg">
                                <div className="font-medium text-sm text-neutral-900">Tugas 3: Integral</div>
                                <div className="text-xs text-neutral-600">Due: 20 Des 2023</div>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <div className="font-medium text-sm text-neutral-900">Kuis: Limit</div>
                                <div className="text-xs text-neutral-600">Due: 13 Des 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <DashboardLayout 
            user={userData}
            title={`${subject?.name || 'Mata Pelajaran'} - Detail`}
        >
            <Head title={subject?.name || 'Kelas Detail'} />

            {/* Breadcrumb */}
            <div className="mb-6">
                <nav className="flex text-sm" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <Link 
                                href="/classes" 
                                className="text-neutral-600 hover:text-primary transition-colors"
                            >
                                Kelas
                            </Link>
                        </li>
                        <li className="text-neutral-400">
                            <i className="fas fa-chevron-right"></i>
                        </li>
                        <li className="text-neutral-900 font-medium">
                            {subject?.name || 'Mata Pelajaran'}
                        </li>
                    </ol>
                </nav>
            </div>

            {/* Page Header */}
            <SubjectHeader subject={subject} />

            {/* Navigation Tabs - Mengirim state activeTab dan handler */}
            <SubjectNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Main Content */}
            <div className="mt-6">
                {activeTab === 'grades' || activeTab === 'schedule' || activeTab === 'resources' ? (
                    // Full width untuk tabs tertentu
                    renderContent()
                ) : (
                    // Grid layout untuk tabs dengan sidebar
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            {renderContent()}
                        </div>
                        <div>
                            {renderSidebar()}
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}