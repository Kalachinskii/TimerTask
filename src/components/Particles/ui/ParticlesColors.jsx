import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import Particles from "react-particles";
import particlesConfig from "../particles-config";
import '../style.css'

export const ParticlesColors = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
        />
    );
}