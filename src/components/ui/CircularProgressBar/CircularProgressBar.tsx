import {CircularProgressBarContainer} from "@/components/ui/CircularProgressBar/CircularProgressBar.style";

interface CircularProgressBarProps {
    progressValue?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    trackColor?: string;
    label?: string;
    showValue?: boolean;
}

export const CircularProgressBar = ({progressValue = 50, size = 40, strokeWidth = 10, color = "#6366f1", trackColor = "#e2e8f0", label, showValue = true }: CircularProgressBarProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - ( progressValue / 100) * circumference;

    return (
        <CircularProgressBarContainer width={size} height={size}>
            <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
                {/* Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                {/* Progress */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
            </svg>
        </CircularProgressBarContainer>
    )
}