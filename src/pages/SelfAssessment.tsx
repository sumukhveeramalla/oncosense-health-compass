
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Calendar, ChevronRight, ClipboardCheck, Heart, Info } from "lucide-react";

const SelfAssessment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 container max-w-md mx-auto p-4 pb-20">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Self-Assessment</h1>
            <p className="text-sm text-muted-foreground">Track your wellness journey</p>
          </div>
          
          <Tabs defaultValue="comfort" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="comfort" className="text-[10px] px-1">Comfort</TabsTrigger>
              <TabsTrigger value="lifestyle" className="text-[10px] px-1">Lifestyle</TabsTrigger>
              <TabsTrigger value="symptoms" className="text-[10px] px-1">Symptoms</TabsTrigger>
              <TabsTrigger value="treatment" className="text-[10px] px-1">Treatment</TabsTrigger>
              <TabsTrigger value="quality" className="text-[10px] px-1">Quality</TabsTrigger>
            </TabsList>
            
            <TabsContent value="comfort" className="space-y-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Heart size={18} className="text-rose-500" />
                    Comfort Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">How are you feeling today?</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {["Great", "Good", "Okay", "Mild", "Noticeable"].map((level, i) => (
                          <button 
                            key={level} 
                            className={`text-xs py-2 rounded-md ${i < 3 ? 'bg-green-100 text-green-800' : i === 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-amber-100 text-amber-800'}`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative bg-muted/50 p-3 rounded-lg aspect-[3/4]">
                      <h3 className="text-sm font-medium mb-2">Identify area of discomfort</h3>
                      <div className="flex justify-center">
                        <svg viewBox="0 0 100 120" width="150" height="180" className="mx-auto">
                          <path d="M40,40 C30,30 20,35 20,50 C20,65 30,75 40,85 C45,90 55,90 60,85 C70,75 80,65 80,50 C80,35 70,30 60,40 C55,45 45,45 40,40 Z" fill="#f1f1f1" stroke="#ccc" />
                          <circle cx="35" cy="55" r="3" fill="#e0e0e0" className="cursor-pointer hover:fill-primary transition-colors" />
                          <circle cx="65" cy="55" r="3" fill="#e0e0e0" className="cursor-pointer hover:fill-primary transition-colors" />
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-2">Tap to pinpoint specific areas</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button size="sm">Save Today's Entry</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Recent History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { date: "Yesterday", level: "Good", area: "None" },
                      { date: "2 days ago", level: "Mild", area: "Upper right" },
                      { date: "3 days ago", level: "Good", area: "None" },
                    ].map((entry, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="text-xs font-medium">{entry.date}</p>
                          <p className="text-xs text-muted-foreground">Comfort: {entry.level}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="lifestyle" className="space-y-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-green-400 via-green-300 to-green-200" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Activity size={18} className="text-green-500" />
                    Lifestyle Journal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h3 className="text-sm font-medium mb-1">Sleep</h3>
                        <p className="text-xs text-muted-foreground mb-2">Hours last night</p>
                        <div className="grid grid-cols-5 gap-1">
                          {[6, 7, 8, 9, "10+"].map((hours, i) => (
                            <button 
                              key={i} 
                              className={`text-xs py-1.5 rounded-md ${i === 2 ? 'bg-primary/20 text-primary' : 'bg-white'}`}
                            >
                              {hours}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h3 className="text-sm font-medium mb-1">Exercise</h3>
                        <p className="text-xs text-muted-foreground mb-2">Activity level</p>
                        <div className="grid grid-cols-3 gap-1">
                          {["Low", "Med", "High"].map((level, i) => (
                            <button 
                              key={level} 
                              className={`text-xs py-1.5 rounded-md ${i === 1 ? 'bg-primary/20 text-primary' : 'bg-white'}`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-1">Stress Level</h3>
                      <div className="grid grid-cols-5 gap-1">
                        {["Very Low", "Low", "Moderate", "High", "Very High"].map((level, i) => (
                          <button 
                            key={level} 
                            className={`text-xs py-1.5 rounded-md ${i === 2 ? 'bg-primary/20 text-primary' : 'bg-white'}`}
                          >
                            {level.includes(" ") ? level.split(" ")[1] : level}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button size="sm">Save Today's Entry</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="symptoms" className="space-y-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Calendar size={18} className="text-amber-500" />
                    Symptom Observer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Have you noticed any changes?</h3>
                      <div className="space-y-2">
                        {[
                          "Changes in size or shape",
                          "Skin texture differences",
                          "Unusual sensations",
                          "Changes in appearance"
                        ].map((symptom, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-2 rounded-md">
                            <span className="text-xs">{symptom}</span>
                            <div className="flex gap-2">
                              <button className="text-xs px-3 py-1 rounded-full bg-gray-100">No</button>
                              <button className="text-xs px-3 py-1 rounded-full bg-gray-100">Yes</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Cycle timing</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, i) => (
                          <button 
                            key={week} 
                            className={`text-xs py-2 rounded-md ${i === 1 ? 'bg-primary/20 text-primary' : 'bg-white'}`}
                          >
                            {week}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button size="sm">Save Today's Entry</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="treatment" className="space-y-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <ClipboardCheck size={18} className="text-purple-500" />
                    Treatment Adherence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Medication tracking</h3>
                      <div className="space-y-2">
                        {[
                          { name: "Vitamin D", time: "Morning", taken: true },
                          { name: "Calcium", time: "Evening", taken: false }
                        ].map((med, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-2 rounded-md">
                            <div>
                              <p className="text-xs font-medium">{med.name}</p>
                              <p className="text-xs text-muted-foreground">{med.time}</p>
                            </div>
                            <button 
                              className={`text-xs px-3 py-1 rounded-full ${med.taken ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}
                            >
                              {med.taken ? "Taken" : "Take now"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Upcoming appointments</h3>
                      <div className="bg-white p-3 rounded-md">
                        <p className="text-xs font-medium">Dr. Williams - Follow-up</p>
                        <p className="text-xs text-muted-foreground">Apr 12, 2025 - 10:00 AM</p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm" className="text-xs h-7">Reschedule</Button>
                          <Button size="sm" className="text-xs h-7">Confirm</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Side effects or concerns</h3>
                      <textarea className="w-full p-2 text-xs rounded-md" rows={3} placeholder="Note anything you'd like to discuss with your healthcare provider..."></textarea>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="quality" className="space-y-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-rose-400 via-rose-300 to-rose-200" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Activity size={18} className="text-rose-500" />
                    Quality of Life
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Energy level today</h3>
                      <div className="grid grid-cols-5 gap-1">
                        {["Very Low", "Low", "Moderate", "High", "Very High"].map((level, i) => (
                          <button 
                            key={level} 
                            className={`text-xs py-1.5 rounded-md ${i === 3 ? 'bg-primary/20 text-primary' : 'bg-white'}`}
                          >
                            {level.includes(" ") ? level.split(" ")[1] : level}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Emotional wellbeing</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { emoji: "😔", label: "Low" },
                          { emoji: "😐", label: "Neutral" },
                          { emoji: "😊", label: "Good" }
                        ].map((mood, i) => (
                          <button 
                            key={i} 
                            className={`flex flex-col items-center gap-1 py-2 rounded-md ${i === 2 ? 'bg-primary/20 text-primary' : 'bg-white'}`}
                          >
                            <span className="text-xl">{mood.emoji}</span>
                            <span className="text-xs">{mood.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Functional abilities</h3>
                      <div className="space-y-2">
                        {[
                          "Able to perform normal activities",
                          "Sleep quality is adequate",
                          "Can focus on tasks",
                          "Social engagement is satisfactory"
                        ].map((ability, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-2 rounded-md">
                            <span className="text-xs">{ability}</span>
                            <div className="flex gap-2">
                              <button className="text-xs px-3 py-1 rounded-full bg-gray-100">No</button>
                              <button className={`text-xs px-3 py-1 rounded-full ${i !== 1 ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}>
                                Yes
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button size="sm">Save Today's Entry</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Navigation activeTab="assessment" />
    </div>
  );
};

export default SelfAssessment;
