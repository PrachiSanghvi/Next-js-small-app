// Catch all Routes [...params] - https://www.youtube.com/watch?v=ZHn726VDoIY&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=9
// Optional catch all routes [[...params]]
import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  const { params  = []} = router.query;
  if (params.length === 2) {
    return <h2>Viewing Doc for feature {params[0]} and concept {params[1]}</h2>
  } else if(params.length === 1) {
    return <h2> Viewing Doc for feature {params[0]}</h2>
  } 
  return <h2>Doc Home page</h2>
}
export default Doc;