// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://www.youtube.com/watch?v=_v_irwUqBUM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=48
export default function handler(req,res){
  const params = req.query.params;
  console.log("params",params);
  res.status(200).json({ name : params })
}