import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useCrateParcelMutation } from "@/redux/features/parcel/parcelApi";
import type { IErrorResponse } from "@/types";

const createParcelSchma = z.object({
  type: z.enum(["DOCUMENT", "REGULAR"], {
    message: "Select a valid parcel type",
  }),
  weight: z.string().regex(/^\d+$/, "Weight must be a positive number"),
  receiverName: z.string().min(1, { message: "Receiver name is required" }),
  receiverPhone: z.string().regex(/^01\d{9}$/, {
    message: "Phone number must be valid for Bangladesh. Format: 01XXXXXXXXX",
  }),
  receiverEmail: z.string().optional(),
  receiverAddress: z
    .string()
    .min(1, { message: "Receiver address is required" }),
  pickingAddress: z.string().min(1, { message: "Picking address is required" }),
});

export function CreateParcelForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [create, { isLoading }] = useCrateParcelMutation();
  const form = useForm<z.infer<typeof createParcelSchma>>({
    resolver: zodResolver(createParcelSchma),
    defaultValues: {
      weight: "",
      receiverName: "",
      receiverPhone: "",
      receiverEmail: "",
      receiverAddress: "",
      pickingAddress: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof createParcelSchma>) => {
    try {
      const parcelData = {
        weight: Number(data.weight),
        type: data.type,
        receiver: {
          name: data.receiverName,
          phone: data.receiverPhone,
          email: data.receiverEmail || undefined,
          address: data.receiverAddress,
        },
        pickingAddress: data.pickingAddress,
      };
      const res = await create(parcelData).unwrap();

      if (res.success) {
        toast.success("Parcel created successfully");
        form.reset();
      }
    } catch (err: unknown) {
      toast.error((err as IErrorResponse).data?.message);
    }
  };

  return (
    <div
      className={cn("flex flex-col gap-4 p-4 max-w-2xl w-full", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold ">Create Parcel</h1>
      </div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parcel Type</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select parcel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="DOCUMENT">Document</SelectItem>
                      <SelectItem value="REGULAR">Regular</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter weight in kg"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receiverName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Mr. suhag"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receiverPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="01711010203"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receiverEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Email (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="suhag@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receiverAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Address</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Dhaka"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickingAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Picking Address</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Dhaka"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button disabled={isLoading} type="submit">
                {isLoading ? "Creating" : "Create"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
