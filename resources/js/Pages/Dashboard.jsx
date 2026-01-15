// resources/js/Pages/Dashboard.jsx
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import WelcomeBanner from '@/Components/Dashboard/WelcomeBanner';
import StatsCards from '@/Components/Dashboard/StatsCards';
import UpcomingSchedule from '@/Components/Dashboard/UpcomingSchedule';
import RecentAssignments from '@/Components/Dashboard/RecentAssignments';
import QuickActions from '@/Components/Dashboard/QuickActions';
import Announcements from '@/Components/Dashboard/Announcements';
import PerformanceChart from '@/Components/Dashboard/PerformanceChart';

export default function Dashboard({ auth, status }) {
    const userData = auth.user;

    // Stats data based on role
    const statsData = {
        siswa: {
            todaySchedule: "3 Pelajaran",
            pendingTasks: "5 Tugas",
            averageScore: "85.5",
            attendanceRate: "95%"
        },
        guru: {
            todaySchedule: "4 Kelas",
            pendingTasks: "12 Tugas",
            averageScore: "78.2",
            attendanceRate: "92%"
        },
        orangtua: {
            todaySchedule: "Anak: 3 Pelajaran",
            pendingTasks: "Anak: 3 Tugas",
            averageScore: "Anak: 88.0",
            attendanceRate: "Anak: 97%"
        }
    };

    return (
        <DashboardLayout 
            user={userData}
            title="Beranda"
        >
            <Head title="Dashboard" />

            {/* Status Message */}
            {status && (
                <div className="mb-6 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800 border border-green-200">
                    {status}
                </div>
            )}

            {/* Welcome Banner */}
            <WelcomeBanner 
                userName={userData.name}
                role={userData.role}
            />

            {/* Stats Cards - PASS the stats data */}
            <StatsCards 
                role={userData.role}
                stats={statsData[userData.role] || statsData.siswa}
            />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    <RecentAssignments />
                    {/* <QuickActions role={userData.role} /> */}
                    <PerformanceChart role={userData.role} />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <UpcomingSchedule />
                    {/* <Announcements /> */}
                </div>
            </div>
        </DashboardLayout>
    );
}