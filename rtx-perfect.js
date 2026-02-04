'use strict';

const CONFIG = {
    version: '5.0-MAX',
    damage: 9999,
    fov: 360,
    speedMultiplier: 5.0,
    fireRate: 0.001,
    gravity: 0,
    devicePrefix: 'iPhone-RTX-'
};

let state = {
    packets: 0,
    lockedTargetId: null,
    playerPos: { x: 0, y: 0, z: 0 }
};

function main(req) {
    state.packets++;
    if (!req.body) return req;

    try {
        let body = JSON.parse(req.body);

        // Update local player position for distance-based targeting
        if (body.player_pos) state.playerPos = body.player_pos;

        // Logic to find and lock the closest enemy
        if (body.enemies && Array.isArray(body.enemies)) {
            let closestDist = Infinity;
            body.enemies.forEach(enemy => {
                if (enemy.pos) {
                    const d = Math.sqrt(
                        Math.pow(enemy.pos.x - state.playerPos.x, 2) +
                        Math.pow(enemy.pos.y - state.playerPos.y, 2) +
                        Math.pow(enemy.pos.z - state.playerPos.z, 2)
                    );
                    if (d < closestDist) {
                        closestDist = d;
                        state.lockedTargetId = enemy.id;
                    }
                }
            });
        }

        // Apply modifications recursively to ensure nested fields are caught
        recursiveModify(body);

        // Environmental and stealth overrides
        body.device_id = `${CONFIG.devicePrefix}${Math.random().toString(36).slice(2, 8)}`;
        body.ac_status = 'clean';
        body.ping = 1; 

        req.body = JSON.stringify(body);
    } catch (e) {}

    return req;
}

function recursiveModify(obj) {
    if (typeof obj !== 'object' || obj === null) return;

    for (let key in obj) {
        // Combat and Aim manipulation
        if (['aim_data', 'look_at', 'rotation'].includes(key)) {
            obj[key] = { target_id: state.lockedTargetId || 1, bone: 1, fov: CONFIG.fov, wall_pierce: true, x: 0, y: 0, z: 0 };
        }
        
        if (['shoot', 'fire', 'bullet'].includes(key)) {
            Object.assign(obj[key], { 
                penetration: 999, 
                spread: 0, 
                recoil: 0, 
                headshot: true, 
                damage: CONFIG.damage, 
                fire_rate: CONFIG.fireRate 
            });
        }

        // Direct stat overrides
        if (key === 'damage') obj[key] = CONFIG.damage;
        if (key === 'headshot' || key === 'killed') obj[key] = true;
        if (key === 'recoil' || key === 'spread') obj[key] = [0, 0, 0];
        
        // Physics and Movement manipulation
        if (key === 'speed') obj[key] = CONFIG.speedMultiplier;
        if (key === 'gravity') obj[key] = CONFIG.gravity;
        if (key === 'stamina') obj[key] = 100;

        recursiveModify(obj[key]);
    }
}

console.log(`🚀 RTX-PERFECT v${CONFIG.version} - ALL SYSTEMS ONLINE`);
