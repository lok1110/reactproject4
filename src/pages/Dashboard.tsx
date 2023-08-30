import React  from "react"
import { useNavigate,Link } from "react-router-dom";
export interface IHomePageProps {}

const Dashboard: React.FunctionComponent<IHomePageProps> = (props) =>{
  const navigate = useNavigate();
  return (
   

    <div>
       <Link to="/Profile">go to the </Link>
      <button onClick={() => navigate('/layout/55')}>Go to layout</button>
      <h1>Dashboard</h1></div>
  );
};



export default Dashboard;