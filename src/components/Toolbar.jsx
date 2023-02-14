import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
    mdiBackspaceOutline,
    mdiArrowULeftTop,
    mdiThemeLightDark,
    mdiShareVariantOutline,
    mdiChartBoxOutline,
    mdiLinkPlus,
    mdiPause,
    mdiPlay,
} from "@mdi/js";

export default function Profile() {
    const [time, setTime] = useState(0);
    const [paused, setPaused] = useState(false);
    let interval;

    function secondsToHms(s) {
        let hours = Math.floor(s / 3600);
        let minutes = Math.floor((s - hours * 3600) / 60);
        let seconds = s - hours * 3600 - minutes * 60;

        let timeString =
            hours.toString().padStart(2, "0") +
            ":" +
            minutes.toString().padStart(2, "0") +
            ":" +
            seconds.toString().padStart(2, "0");
        return timeString;
    }

    useEffect(() => {
        if (!paused) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [paused]);

    return (
        <div className="container">
            <div className="toolbar right">
                    <button>
                        <Icon path={mdiBackspaceOutline} size={1} />
                    </button>
                    <button>
                        <Icon path={mdiArrowULeftTop} size={1} />
                    </button>
                </div>
                <div className="counter toolbar center">
                    <h1>{secondsToHms(time)}</h1>
                </div>
                <div className="toolbar left">
                    <button>
                        <Icon path={mdiThemeLightDark} size={1} />
                    </button>
                    <button>
                        <Icon path={mdiShareVariantOutline} size={1} />
                    </button>
                    <button>
                        <Icon path={mdiChartBoxOutline} size={1} />
                    </button>
                    <button>
                        <Icon path={mdiLinkPlus} size={1} />
                    </button>
                </div>
        </div>
    )
}
