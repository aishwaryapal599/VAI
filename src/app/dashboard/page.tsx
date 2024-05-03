import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  allSurveyData as getAllSurveyData,
  getCallbacks,
  getContactUs,
} from "@/db/queries/adminQueries";

export default async function Dashboard() {
  const [callbacksPromise, allSurveyDataPromise, allContactUSPromise] =
    await Promise.allSettled([
      getCallbacks(),
      getAllSurveyData(),
      getContactUs(),
    ]);
  const callbacksResult =
    callbacksPromise.status === "fulfilled" ? callbacksPromise.value : [];
  const allSurveyDataResult =
    allSurveyDataPromise.status === "fulfilled"
      ? allSurveyDataPromise.value
      : [];
  const allContactUSResult =
    allContactUSPromise.status === "fulfilled" ? allContactUSPromise.value : [];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex  gap-4 rounded-lg " x-chunk="dashboard-02-chunk-1">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Callback Requests</CardDescription>
            <CardTitle className="text-4xl">
              {callbacksResult?.length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Survey Done</CardDescription>
            <CardTitle className="text-4xl">
              {allSurveyDataResult.length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Contact Us Request</CardDescription>
            <CardTitle className="text-4xl">
              {allContactUSResult.length}
            </CardTitle>
          </CardHeader>
        </Card>

        {/* <Button className="mt-4">Add Product</Button> */}
      </div>
    </main>
  );
}
