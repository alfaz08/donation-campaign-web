import { PieChart, Pie, Cell, ResponsiveContainer,Label,Text} from 'recharts';
import CustomLab from './CustomLab';

const PieChartShow = ({totalAmount,donateMoney}) => {
  const donationPercentage = (donateMoney / totalAmount) * 100;
  const remainingPercentage = 100 - donationPercentage;

  const data = [
    { name: 'Donated', value: donationPercentage },
    { name: 'Remaining', value: remainingPercentage },
  ];
  const COLORS = ['#00C49F', '#FF444A']; // Adjust colors if needed

  return (
    <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={0}
        outerRadius={135}
        paddingAngle={3}
        dataKey="value"
        labelLine={false}
        label={<CustomLab />}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
    
      
  </ResponsiveContainer>
  
  );
};

export default PieChartShow;