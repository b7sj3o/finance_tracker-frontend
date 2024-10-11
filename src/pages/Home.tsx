import React from 'react';
import { notification, userProfileIcon,dollar} from '../assets';
import { data, COLORS } from '../assets/rechartsData';
import { PieChart, Pie, Cell, Tooltip,Legend,} from 'recharts';
import { ExampleInsightComponent } from '../components';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="container w-[90%] mx-auto">
                <div className="HomePage-header flex justify-center mt-6">
                    <div className="HomePage-infoBlock flex w-[80%] items-center gap-3">
                        <div className="HomePage-account w-[40px] h-[40px] rounded-full bg-gray-300 ">
                            <a className='w-[100%] h-[100%] flex justify-center items-center' href="#">
                                <img className="w-[50%] " src={userProfileIcon} alt="User Account Icon" />
                            </a>
                        </div>
                        <div className="HomePage-data">
                            <div className="HomePage-infoTime font-thin text-xs text-gray-500">Good Morning</div>
                            <div className="HomePage-userName text-base font-bold">Samuel George</div>
                        </div>
                    </div>
                    <div className="HomePage-notification w-[40px] h-[40px] rounded-full bg-gray-300 ">
                        <a className='w-[100%] h-[100%] flex justify-center items-center' href="#">
                            <img className="w-[50%] " src={notification} alt="User Account Icon" />
                        </a>
                    </div>
                </div>
                <div className="HomePage-balanceWrapper flex items-center justify-center w-[100%] mt-16">
                    <img className="w-[40px] h-[40px] " src={dollar} alt="Dollar sign" />
                    <span className="HomePage-amount text-3xl font-[700] ">4243534523</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center w-full">
                    <PieChart width={window.innerWidth * 0.9} height={200} >
                        <Pie
                            data={data}
                            labelLine={false}
                            outerRadius={50}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        wrapperStyle={{
                            padding: '10px',
                            fontSize: '15px',
                            color: '#333',
                            fontWeight: 'bold',
                        }}
                        />
                        <Tooltip />
                    </PieChart>
                    </div>
                </div>
            </div>
            <ExampleInsightComponent/>
        </>
    )
}

export default HomePage;
// #TODO npm install recharts
