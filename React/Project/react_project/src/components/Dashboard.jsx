
import image from "../assets/images/dashboardimage.jpg";

const Dashboard = () => {
  const datas = [
    { id: 1, values: "Total Products", total: 1 },
    { id: 2, values: "Total Categories", total: 1 },
    { id: 3, values: "Total Users", total: 1 },
    { id: 4, values: "Total Orders", total: 1 },
  ];

  return (
    <>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {datas.map((e) => (
          <div
            key={e.id}
            className="
              bg-white rounded-2xl shadow-lg p-6
              border-l-4 border-blue-600
              hover:scale-105 transition-all
            "
          >
            <h1 className="text-gray-500 text-lg">{e.values}</h1>
            <p className="text-4xl font-bold text-blue-700 mt-4">
              {e.total}
            </p>
          </div>
        ))}
      </div>

      
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt="Dashboard Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Dashboard;
