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
  place: z.string().min(2, { message: "Molimo unesite vase mesto" }),
  phone: z.string().min(6, { message: "Molimo unesite vas broj telefona" }),
  date: z.string().min(6, { message: "Molimo unesite vas datum rodjenja" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "Morate prihvatiti pravilnik da biste poslali formu",
  }),
});
const Page = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      place: "",
      phone: "",
      date: "",
      email: "",
      message: "",
      acceptedTerms: false,
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Mesto: ${values.place}\n Telefon: ${values.phone}\n Datum: ${values.date}\n Email: ${values.email}\n Poruka: ${values.message}\n Prihvatio pravilnik: ${values.acceptedTerms ? 'Da' : 'Ne'}`;
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

        <div className="flex items-center flex-col gap-5 md:gap-0 md:flex-row">
          <div className="space-y-5 md:w-1/2">
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
          <div className="mx-2 md:ml-5 rounded-3xl md:w-1/2">
            <Form {...form}>
              <form
                className="space-y-6 p-4 lg:p-10 shadow-xl shadow-primary rounded-xl w-[85%] mx-auto"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="space-y-6">
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
                  <FormField
                    control={form.control}
                    name="place"
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
                  />

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
                  <FormField
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
                  />

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
                  <FormField
                    control={form.control}
                    name="acceptedTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            Prihvatam{" "}
                            <Link
                              href="/zastitapodatakaolicnosti"
                              className="underline font-bold text-primary hover:text-gray-600"
                              target="_blank"
                            >
                              Pravilnik o zaštiti podataka o ličnosti
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
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
