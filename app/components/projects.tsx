import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "../../components/ui/avatar"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export function Projects() {
    return (
      <section>
        <Tabs defaultValue="account" className="w-[500px]">
            <TabsList>
                <TabsTrigger value="account">Projects</TabsTrigger>
                <TabsTrigger value="password">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="/favicon.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p>Guan Yu Project</p>
                            </div>
                        </CardTitle>
                        <CardDescription>Full-Stack Developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a 
                            href="https://github.com/zhaolinnn/guanyuproject" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border border-gray hover:bg-black transition-colors duration-200 w-full rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
                            >
                        <div className="aspect-video w-full relative">
                            <img 
                            src="/guanyulanding.png" 
                            alt="Guan Yu Project" 
                            className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        </a>
                    </CardContent>
                    <CardFooter>
                        <p>A complete Mandarin Chinese Learning Curriculum for Free</p>
                    </CardFooter>
                    <hr />
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="/logo.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p>Perapera</p>
                            </div>
                        </CardTitle>
                        <CardDescription>Full-Stack Developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a 
                            href="https://github.com/zhaolinnn/perapera" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border border-gray hover:bg-black transition-colors duration-200 w-full rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
                            >
                        <div className="aspect-video w-full relative">
                            <img 
                            src="/perapera.png" 
                            alt="Project" 
                            className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        </a>
                    </CardContent>
                    <CardFooter>
                        <p>A language learning social media platform</p>
                    </CardFooter>
                </Card>
            </TabsContent>
            


            <TabsContent value="password"><Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src="https://my.wlu.edu/Images/communications/2025%20Brand%20Standards/trident-logo.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p>Washington and Lee University</p>
                            </div>
                        </CardTitle>
                        <CardDescription>T20 Liberal Arts College</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Major in CS, Chinese | Minor in Japanese</p>
                    </CardContent>
                    <hr />
                    <CardHeader>
                        <CardTitle>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="https://upload.wikimedia.org/wikipedia/en/c/c3/National_Taiwan_Normal_University_logo.svg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <p>National Taiwan Normal University 國立臺灣師範大學</p>
                                </div>
                        </CardTitle>
                        <CardDescription>Mandarin Training Center 國語教學中心</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>8-week Intensive 10 Credit Mandarin Program</p>
                    </CardContent>

                </Card>
            </TabsContent>
        </Tabs>
      </section>
    )
  }