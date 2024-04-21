import { Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getCallbacks } from '@/db/queries/adminQueries';

export default async function Responses() {
  const callbacks = await getCallbacks();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Responses</h1>
      </div>
      <div
        className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email ID</TableHead>
              <TableHead>Phone </TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {callbacks.map((callback) => (
              <TableRow key={callback.id}>
                <TableCell className="font-medium">{callback.id}</TableCell>
                <TableCell>12/12/2024</TableCell>
                <TableHead>{callback.name}</TableHead>
                <TableHead>{callback.email}</TableHead>
                <TableHead>{callback.phone}</TableHead>

                <TableCell className="text-right">
                  <Button>
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
