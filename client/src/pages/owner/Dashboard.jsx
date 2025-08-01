import { useState } from "react"
import { assets, dashboardDummyData } from "../../assets/assets"
import FeatureTitle from "../../components/FeatureTitle"

const Dashboard = () => {
  
  const [dashboardData, setDashboardData] = useState(dashboardDummyData)
  
  return (
    <div>
      <FeatureTitle align='left' font='outfit' 
        title='Dashboard' 
        subtitle='Monitor your room listings, track bookings and analyze revenue - all in one place. Stay updated with real-time insights to ensure smooth operations.' 
      />

      <div className="flex gap-4 my-8">
        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
          <img src={assets.totalBookingIcon} alt="bookingImg"
            className="max-sm:hidden h-10"
          />
          
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">
              Total Bookings
            </p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        <div className="bg-primary/3 border border-primary/10 rounded flex p-4 pr-8">
          <img src={assets.totalRevenueIcon} alt="revenueIcon"
            className="max-sm:hidden h-10"
          />
          
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">
              Total Revenue
            </p>
            <p className="text-neutral-400 text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">
                User Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Room
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((val, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {val.user.username}
                  </td>
                  
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                    {val.room.roomType}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                    ${val.totalPrice}
                  </td>

                  <td className="py-3 px-4 border-t border-gray-300 text-center">
                    <button className={`py-1 px-3 text-sm rounded-full mx-auto ${val.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                      {val.isPaid ? 'Completed' : 'Pending'}
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard