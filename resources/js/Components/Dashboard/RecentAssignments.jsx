// resources/js/Components/Dashboard/RecentAssignments.jsx
import { useState } from 'react';

export default function RecentAssignments() {
    const [assignments] = useState([
        { 
            id: 1,
            subject: "Matematika", 
            title: "Turunan Fungsi", 
            dueDate: "Besok",
            status: "high",
            progress: 75,
            submitted: false
        },
        { 
            id: 2,
            subject: "Fisika", 
            title: "Hukum Newton", 
            dueDate: "2 Hari",
            status: "medium",
            progress: 40,
            submitted: false
        },
        { 
            id: 3,
            subject: "Kimia", 
            title: "Tabel Periodik", 
            dueDate: "3 Hari",
            status: "low",
            progress: 20,
            submitted: true
        }
    ]);

    // Ganti route() dengan href biasa untuk sementara
    const assignmentsLink = "#"; // Ganti dengan "/assignments" jika sudah ada route

    const getStatusColor = (status) => {
        switch(status) {
            case 'high': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' };
            case 'medium': return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' };
            case 'low': return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' };
            default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' };
        }
    };

    const getSubjectIcon = (subject) => {
        switch(subject.toLowerCase()) {
            case 'matematika': return 'fas fa-calculator';
            case 'fisika': return 'fas fa-atom';
            case 'kimia': return 'fas fa-flask';
            case 'biologi': return 'fas fa-dna';
            default: return 'fas fa-book';
        }
    };

    const handleSubmit = (assignmentId) => {
        console.log('Submit assignment:', assignmentId);
        // Implement submit functionality
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Tugas Terbaru</h3>
                <a 
                    href={assignmentsLink}
                    className="text-sm text-primary font-medium hover:underline"
                >
                    Lihat semua
                </a>
            </div>
            
            <div className="space-y-4">
                {assignments.length > 0 ? (
                    assignments.map((assignment) => {
                        const statusColors = getStatusColor(assignment.status);
                        
                        return (
                            <div 
                                key={assignment.id}
                                className={`p-4 rounded-xl border ${statusColors.border} hover:bg-neutral-50 transition-colors`}
                            >
                                <div className="flex items-start">
                                    <div className={`w-10 h-10 rounded-lg ${statusColors.bg} flex items-center justify-center mr-3`}>
                                        <i className={`${getSubjectIcon(assignment.subject)} ${statusColors.text}`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-neutral-900">{assignment.title}</h4>
                                        <p className="text-sm text-neutral-500 mt-1">{assignment.subject}</p>
                                        
                                        {/* Progress Bar */}
                                        {!assignment.submitted && (
                                            <div className="mt-3">
                                                <div className="flex justify-between text-xs text-neutral-500 mb-1">
                                                    <span>Progress</span>
                                                    <span>{assignment.progress}%</span>
                                                </div>
                                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                                    <div 
                                                        className={`h-2 rounded-full ${statusColors.bg.replace('100', '500')}`}
                                                        style={{ width: `${assignment.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right ml-4">
                                        <div className="text-sm text-neutral-500">Tenggat</div>
                                        <div className="font-medium text-neutral-900">{assignment.dueDate}</div>
                                        
                                        {!assignment.submitted ? (
                                            <button
                                                onClick={() => handleSubmit(assignment.id)}
                                                className="mt-2 px-3 py-1 text-xs bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                                            >
                                                Kirim
                                            </button>
                                        ) : (
                                            <span className="mt-2 inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-lg">
                                                Terkirim
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-8">
                        <i className="fas fa-tasks text-3xl text-neutral-300 mb-3"></i>
                        <p className="text-neutral-500">Tidak ada tugas yang menunggu</p>
                    </div>
                )}
            </div>
        </div>
    );
}