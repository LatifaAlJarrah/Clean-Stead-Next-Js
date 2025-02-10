const activities = [
  { id: 1, user: "محمد", action: "حجز موعد جديد" },
  { id: 2, user: "محمد", action: "أرسل رسالة" },
  { id: 3, user: "محمد", action: "حجز موعد جديد" },
  { id: 4, user: "محمد", action: "أرسل رسالة" },
  { id: 5, user: "محمد", action: "حجز موعد جديد" },
];

const RecentActivities = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">آخر الأنشطة</h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
          >
            <div>
              <p className="text-sm font-semibold">{activity.user}</p>
              <p className="text-sm text-gray-600">{activity.action}</p>
            </div>
            <button className="text-blue-500 hover:underline text-sm">
              عرض
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
