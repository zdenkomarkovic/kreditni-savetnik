"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/lib/send-mail";
import React from "react";
import Link from "@/node_modules/next/link";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});
const Page = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  const pStyle = "text-lg md:text-2xl";
  const h2Style = "text-xl font-bold md:text-4xl text-primary";
  return (
    <div className="py-24">
      <div className="container px-2 md:px-4 mx-auto space-y-14">
        <h1 className="text-2xl md:text-5xl font-bold text-primary">
          Krediti za fizička lica – Pronađite najbolje rešenje za vas
        </h1>
        <p className={pStyle}>
          U <span className="font-bold text-primary">Kreditnom Savetniku</span>
          znamo koliko je važno doneti pravu finansijsku odluku. Bilo da
          planirate kupovinu nekretnine, refinansiranje postojećih obaveza ili
          vam je potreban keš kredit za nepredviđene troškove, tu smo da vam
          pomognemo da pronađete najpovoljniju opciju. Saradnjom sa vodećim
          bankama i finansijskim institucijama, pružamo vam nezavisne savete i
          podršku u odabiru kredita koji najbolje odgovara vašim potrebama.
        </p>

        <div className="flex items-center flex-col md:flex-row">
          <div className="space-y-5 md;w-1/2">
            <div className="space-y-5">
              <h2 className={h2Style}>Naša ponuda kredita za fizička lica:</h2>
              <p className={pStyle}>
                🔹 Stambeni krediti – Kupovina doma je velika odluka, a mi vam
                pomažemo da pronađete najpovoljniji kredit sa optimalnim
                uslovima otplate i konkurentnim kamatama.
              </p>
              <p className={pStyle}>
                🔹 Keš krediti – Potrebna vam je dodatna finansijska podrška?
                Omogućavamo vam da brzo i jednostavno pronađete keš kredit sa
                fleksibilnim rokovima otplate.
              </p>
              <p className={pStyle}>
                🔹 Refinansiranje kredita – Ako želite da smanjite mesečne
                troškove ili spojite više kredita u jedan, pomažemo vam da
                pronađete najbolje rešenje za refinansiranje.
              </p>
            </div>
            <div className="space-y-5">
              <h2 className={h2Style}>Zašto odabrati Kreditni Savetnik?</h2>
              <p className={pStyle}>
                ✔️ Nezavisno savetovanje – Pronalazimo najbolje opcije za vas,
                bez favorizovanja banaka.
              </p>
              <p className={pStyle}>
                ✔️ Brza i efikasna procedura – Štedimo vaše vreme i pomažemo vam
                da što pre dođete do željenog kredita.
              </p>
              <p className={pStyle}>
                ✔️ Povoljni uslovi – Pregovaramo u vaše ime kako bismo vam
                obezbedili najniže kamatne stope i optimalne uslove otplate.
              </p>
              <p className={pStyle}>
                ✔️ Individualni pristup – Svaka finansijska situacija je
                drugačija, zato analiziramo vaše potrebe i dajemo
                personalizovane preporuke.
              </p>
            </div>
          </div>
          <div className="mx-2 md:mx-20 rounded-3xl ">
            <Form {...form}>
              <form
                className="grid grid-cols-3 items-center p-4 lg:p-10 shadow-xl shadow-primary rounded-xl"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Ime i Prezime:
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Unesite ime i prezime"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">Mesto:</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Unesite mesto vaseg prebivalista"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Broj telefona:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Unesite vas broj telefona"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-xl">
                        Datum rodjenja:
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Unesite vas datum rodjenja"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">Email:</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
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
                        <FormLabel className="lg:text-xl  ">
                          Vasa poruka:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Napisite nam za koji kredit ste zainteresovani"
                            className="text-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p>
                    Popunjavanjem forme slazete se sa{" "}
                    <Link
                      href="/zastitapodatakaolicnosti"
                      className=" underline font-bold"
                    >
                      Pravilnikom o zaštiti podataka o ličnosti.
                    </Link>
                  </p>
                  <Button
                    disabled={isLoading}
                    className="bg-primary  hover:bg-gray-600 transition-colors ease-in-out duration-500"
                  >
                    {isLoading ? "Sending....." : "Send"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className={h2Style}>
            Kontaktirajte nas i donesite pravu finansijsku odluku!
          </h2>
          <p className={pStyle}>
            Bilo da tek planirate uzimanje kredita ili želite bolje uslove od
            postojećih, naš tim je tu da vam pomogne. Zakazite besplatne
            konsultacije i saznajte kako do najboljeg finansijskog rešenja!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
