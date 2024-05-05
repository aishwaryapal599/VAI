import { Eye } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { allSurveyData } from "@/db/queries/adminQueries";
import { formatDate } from "@/lib/utils";

export default async function Responses() {
  const surveyData = await allSurveyData();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          Data Collection Result
        </h1>
      </div>
      <div
        className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Organization Name</TableHead>
              <TableHead>Organization Email</TableHead>
              <TableHead>Organization Phone </TableHead>
              <TableHead>Action </TableHead>

              {/* <TableHead className="text-right">Action</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {surveyData.map((data) => (
              <TableRow key={data.id}>
                <TableHead>{data.id}</TableHead>
                <TableCell>{formatDate(data.createdAt)}</TableCell>
                <TableCell>{data.fullName}</TableCell>
                <TableCell>{data.organizationName}</TableCell>
                <TableCell>{data.organizationEmail}</TableCell>
                <TableCell>{data.organizationPhone}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger className="borer-2 rounded-md border border-gray-300 px-3 py-2  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <Eye className="h-4 w-4" />
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{data.pathname}</DialogTitle>
                        <SurveyData surveyData={data.surveyData as string} />
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
type SurveyData = {
  [key: string]: string;
};
function SurveyData({ surveyData }: { surveyData: string }) {
  const parsedData: SurveyData = JSON.parse(surveyData);

  return (
    <DialogDescription>
      <ul className="mt-4  space-y-4">
        {Object.entries(parsedData).map(([question, answer]) => (
          <li className="grid" key={question}>
            <strong>{question}:</strong> {answer}
          </li>
        ))}
      </ul>
    </DialogDescription>
  );
}
