import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    toast.success(`${data.message}. Message submited successfully`);
    form.reset();
  };

  return (
    <div className="mx-auto container px-4 py-8">
      <h1 className="text-center text-3xl text-primary my-5 font-semibold">
        Contact Us
      </h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Have questions or need assistance? Reach out to our team!
      </p>

      <section className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">
              Send Us Any question or feedback
            </h2>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="w-full"
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="justify-end">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  Submit
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </section>

      <section className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Other Ways</h2>
        <p className="text-muted-foreground mb-4">
          Prefer another method? Contact us via:
        </p>
        <div className="flex justify-center gap-6">
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:support@parceldelivery.com"
              className="text-primary hover:underline"
            >
              support@parceldelivery.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <a href="tel:+1234567890" className="text-primary hover:underline">
              01768101010
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
