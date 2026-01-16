// resources/js/Components/SubjectDetail/SubjectNavigation.jsx
export default function SubjectNavigation({ activeTab, onTabChange }) {
    const tabs = [
        { id: 'materials', label: 'Materi', icon: 'fas fa-book', badge: null },
        { id: 'assignments', label: 'Tugas', icon: 'fas fa-tasks', badge: 3 },
        { id: 'announcements', label: 'Pengumuman', icon: 'fas fa-bullhorn', badge: 1 },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`flex items-center px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                ? 'border-primary text-primary bg-primary/5'
                                : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                            }`}
                    >
                        <i className={`${tab.icon} mr-3`}></i>
                        <span className="font-medium">{tab.label}</span>
                        {tab.badge && (
                            <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                                {tab.badge} baru
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}