import Hero from "../hero/Hero";

export class GameUtils {

    private static _instance:GameUtils = null;
    public windowTool:any = window;
    public pinus:Pomelo = null;

    public static player_info:any = null;
    public static map_scale:number = 20; //方块大小
    public static selete_target:Hero = null;
    public static attack_target:Hero = null;

    public static getInstance():GameUtils {
        if (!GameUtils._instance) {
            GameUtils._instance = new GameUtils();
        }
        return GameUtils._instance;
    }

    init() {
        this.pinus = this.windowTool.pomelo;
    }
}