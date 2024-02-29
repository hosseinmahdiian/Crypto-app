import { ResponsiveContainer ,Line,YAxis,XAxis,CartesianGrid,Tooltip,LineChart ,Legend} from "recharts";

const ChartComponent = ({data,type}) => {

    return(
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={400} data={data}>
                    <Line type="monoton" dataKey={type} stroke="#3874ff" strokewidth="2px"/>
                    <CartesianGrid stroke="#404042" />
                    <YAxis dataKey={type} domain={["auto" , "auto"]}/>
                    <XAxis dataKey="date" hide/>
                    <Tooltip/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
            )
}

export { ChartComponent }