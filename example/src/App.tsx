import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import BasicExample from "./pages/BasicExample";
import DialogExample from "./pages/DialogExample";
import PopupExample from "./pages/PopupExample";

const theme = createTheme({
    palette: {
        mode: "light",
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <div style={{ padding: "20px" }}>
                    <nav style={{ marginBottom: "20px" }}>
                        <Link to="/" style={{ marginRight: "16px" }}>
                            홈
                        </Link>
                        <Link to="/basic" style={{ marginRight: "16px" }}>
                            기본 예제
                        </Link>
                        <Link to="/dialog" style={{ marginRight: "16px" }}>
                            다이얼로그 예제
                        </Link>
                        <Link to="/popup">팝업 예제</Link>
                    </nav>
                    <hr style={{ marginBottom: "20px" }} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/basic" element={<BasicExample />} />
                        <Route path="/dialog" element={<DialogExample />} />
                        <Route path="/popup" element={<PopupExample />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
