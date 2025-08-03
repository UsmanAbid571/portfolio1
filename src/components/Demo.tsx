import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import axios, { AxiosError } from "axios"
import { ApiResponse } from "@/types/ApiResponse"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema/contact";
import { z } from "zod";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import Link from "next/link";
import Image from "next/image";


export default function Demo() {
    const form = useForm<z.infer<typeof contactSchema>>({
           resolver: zodResolver(contactSchema),
       })   
        
        const onSubmit = async (data: z.infer<typeof contactSchema>) => {
            try {
                const response = await axios.post('/api/contact', data);
                toast.success(response?.data.message)
                form.reset()
    
            } catch (error) {
                const axiosError = error as AxiosError<ApiResponse>
                toast.error(axiosError?.response?.data.message)
            }
            
        }
  return (
    <BackgroundBeamsWithCollision>
        <FadeContent>
      <div className="flex flex-col md:flex-row gap-6 h-screen p-8 items-center w-full md:justify-around">
        <div className="md:w-[50vw] flex flex-col justify-center items-center ">
          <h1 className="text-4xl mb-6 font-extrabold tracking-tight lg:text-5xl md:mb-6 ">
          Contact
          </h1>
          <p className="text-xs tracking-tight md:text-sm text-muted-foreground w-[50vw] md:w-[30vw]">Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear from you! Feel free to reach out through the Direct message or connect with me directly via email or LinkedIn.<b> Let&apos;s build something great together.</b></p>
          <span className="flex space-x-4 mt-6">
            <Link href="https://github.com/UsmanAbid571"><Image src="/github.svg" width={40} height={40} alt="Github" /></Link>
            <Link href="https://www.linkedin.com/in/usman-abid-4b9b2524b/"><Image src="/linkedin.svg" width={40} height={40} alt="Linkedin" /></Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammad.usmanabid571@gmaill.com&su=Hello&body=Message%20Body"><Image src="/email.png" width={40} height={40} alt="Gmail"/></Link>
          </span>
          
        </div>
        
        <div className="w-[70vw] md:w-[40vw] ">
           <div className="w-full p-8 space-y-8 rounded-lg shadow-md border">
            <h1 className="text-2xl font-bold">Direct Message</h1>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
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
                        <Input placeholder="example@example.com" {...field} />
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
                        <Textarea placeholder="Type Your Message" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <Button type="submit">
                  Send
                  </Button>
        
                </form>
        
              </Form>
              </div>
              </div>
              </div>
      </FadeContent>
      </BackgroundBeamsWithCollision>
      
  );
}
