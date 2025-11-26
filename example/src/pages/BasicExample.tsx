import { Typography, Box, Paper, Stack } from "@mui/material";
import { ExternalLink } from "@ehfuse/mui-external-link";

export default function BasicExample() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                기본 예제 (Default Mode)
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
                <Typography variant="body1" paragraph>
                    기본 모드에서는 외부 도메인 링크 클릭 시 보안 경고
                    대화상자가 표시됩니다.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            외부 링크 (경고 대화상자 표시):
                        </Typography>
                        <ExternalLink href="https://github.com">
                            GitHub로 이동
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            title이 있는 링크 (바로 이동):
                        </Typography>
                        <ExternalLink
                            href="https://google.com"
                            title="Google 검색"
                        >
                            Google로 이동 (title 있음)
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            상대 경로 링크 (바로 이동):
                        </Typography>
                        <ExternalLink href="/about">
                            About 페이지로 이동
                        </ExternalLink>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}
