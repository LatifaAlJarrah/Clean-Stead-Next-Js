const DashboardStats = () => {
  const stats = [
    { id: 1, label: "تم رفض", value: 24, color: "bg-red-100 text-red-500" },
    {
      id: 2,
      label: "تم تأكيد",
      value: 67,
      color: "bg-green-100 text-green-500",
    },
    { id: 3, label: "معلق", value: 41, color: "bg-yellow-100 text-yellow-500" },
    {
      id: 4,
      label: "إجمالي الحجوزات",
      value: 55,
      color: "bg-purple-100 text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mb-2">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`p-4 rounded-lg shadow-md flex items-center justify-between ${stat.color}`}
        >
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
