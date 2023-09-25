

const CustomLab = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
 
  return (
    <text x={x} y={y} fill="white" fontSize={14} textAnchor="middle" dominantBaseline="central">
    {`${(percent * 100).toFixed(2)}%`}
  </text>
  );
};

export default CustomLab;