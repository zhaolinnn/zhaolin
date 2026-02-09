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
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
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
                            National Taiwan Normal University 臺灣師範大學
                        </CardTitle>
                    </CardHeader>

                </Card>
            </TabsContent>
        </Tabs>
      </section>
    )
  }