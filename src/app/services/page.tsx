'use client'
import axios, { AxiosError } from 'axios';
import { servicesSchema } from '@/schema/services';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { ApiResponse } from '@/types/ApiResponse';
import { toast } from 'sonner';
import FadeContent from '@/blocks/Animations/FadeContent/FadeContent';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard';



const skills = [
    'Web Development',
    'Full Stack Solutions',
    'UI/UX Design',
    'API Development & Integration',
    'Responsive Design',
]
const Services = () => {
     const form = useForm<z.infer<typeof servicesSchema>>({
               resolver: zodResolver(servicesSchema),
           })   
            
            const onSubmit = async (data: z.infer<typeof servicesSchema>) => {
                try {
                    const response = await axios.post('/api/services', data);
                    toast.success(response?.data.message)
                    form.reset()
        
                } catch (error) {
                    const axiosError = error as AxiosError<ApiResponse>
                    toast.error(axiosError?.response?.data.message)
                }
                
            }
  return (
    <div className='mb-6 p-8 min-h-screen'>
        <FadeContent>
      <div className="flex flex-col gap-6 h-screen items-center w-full ">
        <div className="md:w-[50vw] flex flex-col justify-center items-center min-h-screen">
          <div className="text-4xl mb-4 font-bold font-sans md:text-7xl ">
            Services
          
          </div>
          <p className="text-xs tracking-tight md:text-sm text-muted-foreground w-[50vw]">
            As a passionate and detail oriented full stack developer, I provide end-to-end web solutions tailored to bring your ideas to life. Whether you&apos;re a startup, business, or individual with a vision, I offer scalable, secure, and modern digital experiences crafted with clean code and smart design.</p>

            <FadeContent
                        blur={true} duration={1000} easing="ease-out" initialOpacity={0}
                        >
                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 mt-8 '>
                         {
                             skills.map((skill, index) => (
                                        <SpotlightCard key={index} className="flex items-center justify-center custom-spotlight-card   text-center h-[100px]" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <h1>{skill}</h1>
                                    </SpotlightCard>
                                    ))
                                }
                            </div>
                            </FadeContent>
         
          
        </div>
        
        <div className="w-[70vw] my-10 min-h-screen">
           <div className="w-full p-8 space-y-8 rounded-lg shadow-md border">
            <h1 className="text-2xl font-bold">Lets Build Something Great Together </h1>
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
                  name="websiteDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website Info</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type='tel' {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type Your Message" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <Button type="submit">
                  Submit
                  </Button>
        
                </form>
        
              </Form>
              </div>
              </div>
              </div>
              </FadeContent>
    </div>
  )
}

export default Services
