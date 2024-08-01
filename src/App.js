import { ThemeProvider } from "styled-components";
import HomePage from "./pages/Home";
import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";
import LayoutHeader from "./components/Layout/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
    // Axios.get("/movie/popular", {
    //     params: {
    //         language: "ko-KO",
    //         page: 2,
    //     },
    //     // movie/popular?language=ko-KO&page=2
    // }).then((res) => {
    //     console.log(res);
    // });

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 60 * 24, // 하루
                cacheTime: 1000 * 60 * 5, // 5분
            },
        },
    });

    // api를 활용해서 다양한 것을 만들고 싶다면 react-router-dom 연결
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <LayoutHeader />
                <HomePage />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
