import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="px-8 py-6 md:px-16 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        {/* GPA */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1">
          <p className="text-sm text-gray-500">GPA</p>
          <p className="text-2xl font-bold">3.50</p>
        </div>

        {/* Hours Studied */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1">
          <p className="text-sm text-gray-500">Hours Studied This Week</p>
          <p className="text-2xl font-bold">12</p>
        </div>

        {/* Weakest Subject */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1">
          <p className="text-sm text-gray-500">Weakest Subject</p>
          <p className="text-2xl font-bold">MTH 201</p>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1 row-span-2">
          <h4 className="text-lg font-semibold mb-2">Recommendations</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            <li>Spend 2 extra hours on MTH 201.</li>
            <li>Revise PHY 101 twice this week.</li>
          </ul>
          <button className="bg-gray-300 hover:bg-gray-400 text-sm px-4 py-2 rounded">
            Generate Study Timetable
          </button>
        </div>

        {/* Chart 1 Placeholder */}
        <div className="bg-white rounded-lg shadow p-4 col-span-2 h-32 flex items-center justify-center text-gray-400">
          [Chart Placeholder]
        </div>

        {/* Chart 2 Placeholder */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1 h-32 flex items-center justify-center text-gray-400">
          [Bar Graph Placeholder]
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow p-4 col-span-3 overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Course Code</th>
                <th>Last Test Score</th>
                <th>Hours Studied</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">MTH 201</td>
                <td>88</td>
                <td>5</td>
                <td>Strong</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">PSY 101</td>
                <td>75</td>
                <td>3</td>
                <td>Weak</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">PHY 101</td>
                <td>65</td>
                <td>6</td>
                <td>Strong</td>
              </tr>
              <tr>
                <td className="py-2">ENG 202</td>
                <td>92</td>
                <td>2</td>
                <td>Strong</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1 flex items-center justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-sm">
            Download Report
          </button>
        </div>
      </div>
    </div>
    
    <Footer/>
    </>

  );
};

export default Dashboard;
