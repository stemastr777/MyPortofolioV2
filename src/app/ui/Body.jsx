"use client"

import { outfit } from "@/fonts";
import { SectionColor } from "@/ui/context";

import { usePathname } from "next/navigation";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from "@/ui/Header";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function Body({children}) {

    const currentPath = usePathname();

    function getSectionColor(path) {

        const topLevelPath = path.match(/^(\/[^\/]+)/g) ? path.match(/^(\/[^\/]+)/g) : "/";
        switch (topLevelPath[0]) {
            case "/skills":
                return "blue";
            case "/projects":
                return "red"
            case "/academic":
                return "orange"
            case "/organizational-experiences":
                return "green"
            case "/work-experiences":
                return "purple"
            case "/certifications":
                return "yellow"
            default:
                return "slate"
        }
    }

    return(
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <SectionColor.Provider value={getSectionColor(currentPath)}>
                        <body
                            className={`${outfit.className} text-base mb-36 bg-white dark:bg-slate-900 text-black dark:text-slate-200 tracking-wider leading-loose antialiased`}
                        >
                            <Header className="z-20" />
                            <main className=" z-10 w-[90%] md:w-3/4 mx-auto mt-12 min-h-[100vh] ">
                                {children}
                            </main>
                        </body>
                    </SectionColor.Provider>
                </ThemeProvider>
            </StyledEngineProvider>
        </>
    )
}