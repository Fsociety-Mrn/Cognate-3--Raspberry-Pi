import customtkinter

customtkinter.set_appearance_mode("Light")  # Modes: "System" (standard), "Dark", "Light"
customtkinter.set_default_color_theme("green")  # Themes: "blue" (standard), "green", "dark-blue"


class App(customtkinter.CTk):

    WIDTH = 780
    HEIGHT = 520

    def __init__(self):
        super().__init__()
        
        # setting attribute
        self.title("Hydroponics")
        self.geometry(f"{App.WIDTH}x{App.HEIGHT}")
        self.protocol("WM_DELETE_WINDOW", self.on_closing)  # call .on_closing() when app gets closed
        # self.attributes('-fullscreen', True)
        
        # ============ frames ============

        self.frame = customtkinter.CTkFrame(master=self)
        self.frame.pack(pady=10, padx=10, fill="both", expand=True)
      
        
        self.grid_columnconfigure(2, weight=1)
        self.grid_rowconfigure(2, weight=1)

        self.frame_left = customtkinter.CTkFrame(master=self.frame)
        self.frame_left.grid(row=0, column=0, sticky="nswe", padx=25, pady=20)

        
        self.frame_left1 = customtkinter.CTkFrame(master=self.frame, width=App.WIDTH/3)
        self.frame_left1.grid(row=1, column=1, sticky="nswe", padx=25, pady=20)
        
        self.frame_left2 = customtkinter.CTkFrame(master=self.frame, width=App.WIDTH/3)
        self.frame_left2.grid(row=1, column=2, sticky="nswe", padx=25, pady=20)
        
        self.frame_left3 = customtkinter.CTkFrame(master=self.frame, width=App.WIDTH/3)
        self.frame_left3.grid(row=1, column=3, sticky="nswe", padx=0, pady=20)
        
        # ============ frames ============
        # self.Temp = customtkinter.CTkFrame(master=self.frame,width=180)
        # self.frame.pack(pady=20, padx=20, fill="both", expand=True)

    def on_closing(self, event=0):
        self.destroy()


if __name__ == "__main__":
    app = App()
    app.mainloop()