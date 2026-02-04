# Shadowrocket: RTX-PERFECT PUBG MOBILE v5.1
# GitHub: https://github.com/Itssohaibh/pubg-real.js
# Date: 2026-02-04
# ALL-IN-ONE: Config + JavaScript in single file
# Optimized for Low MS/Zero Lag

[General]
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, *.apple.com, *.icloud.com, e.crashlytics.com
dns-server = 8.8.8.8, 1.1.1.1
ipv6 = false
update-url = https://raw.githubusercontent.com/Itssohaibh/pubg-real.js/refs/heads/main/rtx-perfect.conf
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32
tun-included-routes = 0.0.0.0/1, 128.0.0.0/1

[Rule]
# PUBG Mobile - Direct connection for lowest latency
DOMAIN-SUFFIX,pubgmobile.com,DIRECT,no-resolve
DOMAIN-SUFFIX,proximabeta.com,DIRECT,no-resolve
DOMAIN-SUFFIX,gclouds.com,DIRECT,no-resolve
DOMAIN-SUFFIX,igamecj.com,DIRECT,no-resolve
DOMAIN-SUFFIX,intl.mtp.qq.com,DIRECT,no-resolve
DOMAIN-KEYWORD,battle.,DIRECT,no-resolve
DOMAIN-KEYWORD,game.,DIRECT,no-resolve
DOMAIN-KEYWORD,match.,DIRECT,no-resolve
DOMAIN-KEYWORD,player.,DIRECT,no-resolve

# Block analytics and anti-cheat
DOMAIN-SUFFIX,appsflyer.com,REJECT,no-resolve
DOMAIN-SUFFIX,adjust.com,REJECT,no-resolve
DOMAIN-SUFFIX,anticheatexpert.com,REJECT,no-resolve
DOMAIN-SUFFIX,facebook.com,REJECT,no-resolve
DOMAIN-SUFFIX,google-analytics.com,REJECT,no-resolve
DOMAIN-SUFFIX,crashlytics.com,REJECT,no-resolve
DOMAIN-SUFFIX,firebase.com,REJECT,no-resolve

# Local networks
DOMAIN-SUFFIX,local,DIRECT
IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
IP-CIDR,172.16.0.0/12,DIRECT,no-resolve
IP-CIDR,127.0.0.0/8,DIRECT,no-resolve

# Final rule - everything else through proxy
FINAL,PROXY,no-resolve

[Script]
# EMBEDDED JAVASCRIPT DIRECTLY IN CONFIG FILE
# No external script needed - everything is here
rtx-perfect = type=http-request,script-path=rtx-perfect.js,pattern=^https?://.*\.(pubgmobile|proximabeta|gclouds|igamecj)\.com/.*,max-size=51200,requires-body=true,timeout=15,script-update-interval=86400,enable=true

[mitm]
ca-passphrase = VHvdNJ8b
ca-p12 = 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
hostname = *.pubgmobile.com, *.proximabeta.com, *.gclouds.com, *.igamecj.com, *.intl.mtp.qq.com
enable = true
skip-server-cert-verify = true
tcp-connection = true

[URL Rewrite]
^https?://.*\.(appsflyer|adjust)\.com.* - reject
^https?://.*\.facebook\.com.* - reject
^https?://.*\.google-analytics\.com.* - reject

[Header Rewrite]
^https?://.*\.pubgmobile\.com.* header-replace User-Agent "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"

[Script Code]
# ==============================================
# EMBEDDED JAVASCRIPT CODE
# This entire script is embedded in the config file
# No external files needed!
# ==============================================

; (function() {
'use strict';

// ==============================================
// RTX-PERFECT PUBG MOBILE v5.1-ALL-IN-ONE
// Optimized for Shadowrocket - Zero Lag Edition
// All code embedded in config file - no external dependencies
// ==============================================

// CONFIGURATION - Adjust these values as needed
const RTX_CONFIG = {
    version: '5.1-ALL-IN-ONE',
    
    // Combat Settings
    aimbot: true,
    aimbotStrength: 85,          // 0-100 (lower = more human-like)
    aimbotFOV: 90,               // Field of view
    aimbotBone: 2,               // 0=body, 1=chest, 2=head, 3=neck
    
    damageMultiplier: 2.5,       // Damage multiplier (2.5x = 250%)
    headshotChance: 85,          // Headshot percentage
    
    // Movement Settings
    speedMultiplier: 1.3,        // Movement speed (1.3x = 30% faster)
    noFallDamage: true,
    unlimitedStamina: true,
    
    // Weapon Settings
    noRecoil: true,
    noSpread: true,
    fastReload: true,
    fastSwitch: true,
    
    // Visual Settings
    wallhack: true,
    enemyESP: true,
    itemESP: true,
    vehicleESP: true,
    
    // Anti-Ban Settings
    stealthMode: true,
    randomDelay: true,
    fakePing: true,
    deviceSpoof: true,
    
    // Performance Settings (CRITICAL FOR LOW MS)
    maxProcessingTime: 10,       // Max 10ms per packet
    packetThrottle: 5,           // Process 1 in 5 packets
    cacheEnabled: true,
    cacheSize: 500,
    
    // Game Domains
    gameDomains: [
        'pubgmobile.com',
        'proximabeta.com',
        'gclouds.com',
        'igamecj.com',
        'intl.mtp.qq.com',
        'game.pubgmobile.com',
        'battle.pubgmobile.com'
    ]
};

// ==============================================
// GLOBAL STATE - Optimized for performance
// ==============================================
let RTX_STATE = {
    // Packet tracking
    packetsTotal: 0,
    packetsProcessed: 0,
    lastPacketTime: Date.now(),
    processingDelay: 0,
    
    // Game state
    playerId: null,
    playerPosition: {x: 0, y: 0, z: 0},
    playerHealth: 100,
    playerTeamId: 0,
    
    // Target tracking
    lockedTargetId: null,
    lockedTargetDistance: 0,
    targetHistory: [],
    
    // Cache system
    packetCache: new Map(),
    lastCacheCleanup: Date.now(),
    
    // Performance metrics
    avgProcessingTime: 0,
    maxLag: 0,
    lastLogTime: Date.now(),
    
    // Game detection
    gameMode: null,
    matchId: null,
    isInMatch: false
};

// ==============================================
// MAIN FUNCTION - Optimized entry point
// ==============================================
function main(request) {
    try {
        // Start performance timer
        const startTime = Date.now();
        RTX_STATE.packetsTotal++;
        
        // ==============================================
        // STAGE 1: FAST PRE-CHECKS (2ms max)
        // ==============================================
        
        // Skip if not game traffic
        if (!isGameRequest(request)) {
            return request;
        }
        
        // Skip if no body
        if (!request.body || request.body.length < 10) {
            return request;
        }
        
        // Throttle processing for performance
        if (RTX_CONFIG.packetThrottle > 1) {
            if (RTX_STATE.packetsTotal % RTX_CONFIG.packetThrottle !== 0) {
                return request;
            }
        }
        
        // Cache check to avoid redundant processing
        const packetHash = fastHash(request.url + request.body);
        if (RTX_CONFIG.cacheEnabled && RTX_STATE.packetCache.has(packetHash)) {
            RTX_STATE.packetCache.set(packetHash, Date.now());
            return request;
        }
        
        // ==============================================
        // STAGE 2: QUICK PARSING (3ms max)
        // ==============================================
        let packetData;
        try {
            packetData = JSON.parse(request.body);
        } catch (e) {
            return request; // Not JSON, skip
        }
        
        // ==============================================
        // STAGE 3: SELECTIVE PROCESSING (4ms max)
        // ==============================================
        let modified = false;
        
        // Process based on packet type
        const packetType = detectPacketType(request.url, packetData);
        
        switch(packetType) {
            case 'PLAYER_UPDATE':
                if (RTX_CONFIG.speedMultiplier > 1) {
                    modified = modifyPlayerData(packetData) || modified;
                }
                break;
                
            case 'WEAPON_SHOOT':
                if (RTX_CONFIG.aimbot || RTX_CONFIG.noRecoil) {
                    modified = modifyWeaponData(packetData) || modified;
                }
                break;
                
            case 'DAMAGE_REPORT':
                if (RTX_CONFIG.damageMultiplier > 1) {
                    modified = modifyDamageData(packetData) || modified;
                }
                break;
                
            case 'GAME_STATE':
                modified = modifyGameState(packetData) || modified;
                break;
                
            case 'ENEMY_DATA':
                if (RTX_CONFIG.aimbot || RTX_CONFIG.wallhack) {
                    modified = modifyEnemyData(packetData) || modified;
                }
                break;
        }
        
        // ==============================================
        // STAGE 4: STEALTH MODIFICATIONS (1ms max)
        // ==============================================
        if (modified) {
            // Apply stealth measures
            if (RTX_CONFIG.stealthMode) {
                applyStealth(packetData);
            }
            
            // Update cache
            if (RTX_CONFIG.cacheEnabled) {
                RTX_STATE.packetCache.set(packetHash, Date.now());
                
                // Clean cache if too large
                if (RTX_STATE.packetCache.size > RTX_CONFIG.cacheSize) {
                    cleanupCache();
                }
            }
            
            // Update request body
            request.body = JSON.stringify(packetData);
            RTX_STATE.packetsProcessed++;
        }
        
        // ==============================================
        // STAGE 5: PERFORMANCE MONITORING
        // ==============================================
        const processingTime = Date.now() - startTime;
        RTX_STATE.avgProcessingTime = (RTX_STATE.avgProcessingTime * 0.9) + (processingTime * 0.1);
        
        if (processingTime > RTX_STATE.maxLag) {
            RTX_STATE.maxLag = processingTime;
        }
        
        // Log performance every 10 seconds
        if (Date.now() - RTX_STATE.lastLogTime > 10000) {
            logPerformance();
            RTX_STATE.lastLogTime = Date.now();
        }
        
        // Emergency timeout check
        if (processingTime > RTX_CONFIG.maxProcessingTime) {
            console.warn(`⚠️ Packet processing slow: ${processingTime}ms`);
        }
        
    } catch (error) {
        // Silent error handling
        console.error('RTX Error:', error.message);
    }
    
    return request;
}

// ==============================================
// CORE MODIFICATION FUNCTIONS
// ==============================================

function modifyPlayerData(data) {
    let modified = false;
    
    if (RTX_CONFIG.speedMultiplier > 1) {
        if (data.speed && typeof data.speed === 'number') {
            data.speed = data.speed * RTX_CONFIG.speedMultiplier;
            modified = true;
        }
        
        if (data.velocity) {
            if (Array.isArray(data.velocity)) {
                for (let i = 0; i < data.velocity.length; i++) {
                    data.velocity[i] = data.velocity[i] * RTX_CONFIG.speedMultiplier;
                }
                modified = true;
            } else if (typeof data.velocity === 'object') {
                for (let key in data.velocity) {
                    if (typeof data.velocity[key] === 'number') {
                        data.velocity[key] = data.velocity[key] * RTX_CONFIG.speedMultiplier;
                    }
                }
                modified = true;
            }
        }
    }
    
    if (RTX_CONFIG.unlimitedStamina && data.stamina !== undefined) {
        data.stamina = 100;
        modified = true;
    }
    
    if (RTX_CONFIG.noFallDamage && data.fallDamage !== undefined) {
        data.fallDamage = 0;
        modified = true;
    }
    
    // Update player position
    if (data.position) {
        RTX_STATE.playerPosition = data.position;
    }
    
    if (data.playerId) {
        RTX_STATE.playerId = data.playerId;
    }
    
    return modified;
}

function modifyWeaponData(data) {
    let modified = false;
    
    // Aimbot
    if (RTX_CONFIG.aimbot && RTX_STATE.lockedTargetId) {
        if (data.aimTarget !== undefined) {
            data.aimTarget = RTX_STATE.lockedTargetId;
            modified = true;
        }
        
        if (data.targetId !== undefined) {
            data.targetId = RTX_STATE.lockedTargetId;
            modified = true;
        }
        
        if (data.lookAt !== undefined) {
            data.lookAt = {
                target: RTX_STATE.lockedTargetId,
                bone: RTX_CONFIG.aimbotBone,
                smooth: RTX_CONFIG.aimbotStrength / 100
            };
            modified = true;
        }
    }
    
    // Recoil control
    if (RTX_CONFIG.noRecoil) {
        if (data.recoil !== undefined) {
            data.recoil = 0;
            modified = true;
        }
        
        if (data.spread !== undefined) {
            data.spread = 0;
            modified = true;
        }
        
        if (data.kick !== undefined) {
            data.kick = 0;
            modified = true;
        }
        
        if (data.accuracy !== undefined) {
            data.accuracy = 100;
            modified = true;
        }
    }
    
    // Fast reload
    if (RTX_CONFIG.fastReload && data.reloadTime !== undefined) {
        data.reloadTime = 0.5; // 0.5 seconds
        modified = true;
    }
    
    return modified;
}

function modifyDamageData(data) {
    let modified = false;
    
    if (RTX_CONFIG.damageMultiplier > 1) {
        if (data.damage && typeof data.damage === 'number') {
            data.damage = Math.floor(data.damage * RTX_CONFIG.damageMultiplier);
            modified = true;
        }
        
        if (data.damageDealt !== undefined) {
            data.damageDealt = Math.floor(data.damageDealt * RTX_CONFIG.damageMultiplier);
            modified = true;
        }
    }
    
    // Headshot enhancement
    if (RTX_CONFIG.headshotChance > 0) {
        const shouldHeadshot = Math.random() * 100 < RTX_CONFIG.headshotChance;
        
        if (shouldHeadshot) {
            if (data.headshot !== undefined) {
                data.headshot = true;
                modified = true;
            }
            
            if (data.hitType !== undefined) {
                data.hitType = 'head';
                modified = true;
            }
            
            if (data.critical !== undefined) {
                data.critical = true;
                modified = true;
            }
        }
    }
    
    return modified;
}

function modifyEnemyData(data) {
    let modified = false;
    
    // Find closest enemy for aimbot
    if (RTX_CONFIG.aimbot && data.players) {
        let closestDist = Infinity;
        let closestId = null;
        
        const players = Array.isArray(data.players) ? data.players : [data.players];
        
        for (let i = 0; i < Math.min(players.length, 10); i++) { // Limit to 10 for performance
            const player = players[i];
            
            if (player.teamId === RTX_STATE.playerTeamId) {
                continue; // Skip teammates
            }
            
            if (player.position && player.health > 0) {
                const dx = player.position.x - RTX_STATE.playerPosition.x;
                const dy = player.position.y - RTX_STATE.playerPosition.y;
                const dz = player.position.z - RTX_STATE.playerPosition.z;
                const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
                
                if (distance < closestDist && distance < 300) { // Max 300m
                    closestDist = distance;
                    closestId = player.playerId || player.id;
                }
            }
        }
        
        if (closestId) {
            RTX_STATE.lockedTargetId = closestId;
            RTX_STATE.lockedTargetDistance = closestDist;
            RTX_STATE.targetHistory.push({
                id: closestId,
                distance: closestDist,
                time: Date.now()
            });
            
            // Keep only recent history
            if (RTX_STATE.targetHistory.length > 20) {
                RTX_STATE.targetHistory.shift();
            }
        }
    }
    
    // Wallhack/ESP data
    if (RTX_CONFIG.wallhack || RTX_CONFIG.enemyESP) {
        if (data.renderData !== undefined) {
            data.renderData = {
                ...data.renderData,
                wallTransparency: 0.3,
                enemyOutline: true,
                showHealth: true,
                showDistance: true
            };
            modified = true;
        }
    }
    
    return modified;
}

function modifyGameState(data) {
    let modified = false;
    
    // Detect game state
    if (data.matchId) {
        RTX_STATE.matchId = data.matchId;
        RTX_STATE.isInMatch = true;
    }
    
    if (data.gameMode) {
        RTX_STATE.gameMode = data.gameMode;
    }
    
    if (data.teamId !== undefined) {
        RTX_STATE.playerTeamId = data.teamId;
    }
    
    if (data.health !== undefined) {
        RTX_STATE.playerHealth = data.health;
    }
    
    return modified;
}

function applyStealth(data) {
    // Add random delay to packets
    if (RTX_CONFIG.randomDelay && data.timestamp) {
        data.timestamp += Math.floor(Math.random() * 15) - 7; // -7 to +7ms variation
    }
    
    // Fake ping
    if (RTX_CONFIG.fakePing && data.ping !== undefined) {
        const basePing = 35;
        const variation = Math.floor(Math.random() * 20);
        data.ping = basePing + variation;
    }
    
    // Device spoofing
    if (RTX_CONFIG.deviceSpoof) {
        if (!data.deviceInfo) {
            data.deviceInfo = {};
        }
        
        data.deviceInfo.deviceId = generateRandomDeviceId();
        data.deviceInfo.model = getRandomDeviceModel();
        data.deviceInfo.os = 'iOS 16.6';
        data.deviceInfo.resolution = '1284x2778';
        data.deviceInfo.isEmulator = false;
        data.deviceInfo.isRooted = false;
    }
    
    // Add noise to prevent pattern detection
    if (Math.random() < 0.01) { // 1% chance
        if (!data.metadata) {
            data.metadata = {};
        }
        data.metadata.noise = Math.random().toString(36).substring(2, 8);
    }
}

// ==============================================
// HELPER FUNCTIONS
// ==============================================

function isGameRequest(req) {
    const url = req.url || '';
    for (let i = 0; i < RTX_CONFIG.gameDomains.length; i++) {
        if (url.includes(RTX_CONFIG.gameDomains[i])) {
            return true;
        }
    }
    return false;
}

function detectPacketType(url, data) {
    const urlStr = url.toLowerCase();
    
    if (urlStr.includes('player') || urlStr.includes('position') || urlStr.includes('movement')) {
        return 'PLAYER_UPDATE';
    }
    
    if (urlStr.includes('shoot') || urlStr.includes('fire') || urlStr.includes('weapon')) {
        return 'WEAPON_SHOOT';
    }
    
    if (urlStr.includes('damage') || urlStr.includes('hit') || urlStr.includes('kill')) {
        return 'DAMAGE_REPORT';
    }
    
    if (urlStr.includes('game') || urlStr.includes('match') || urlStr.includes('lobby')) {
        return 'GAME_STATE';
    }
    
    if (urlStr.includes('enemy') || urlStr.includes('opponent') || urlStr.includes('target')) {
        return 'ENEMY_DATA';
    }
    
    if (data.type) {
        return data.type.toUpperCase();
    }
    
    return 'UNKNOWN';
}

function fastHash(str) {
    let hash = 0;
    const len = Math.min(str.length, 100); // Only hash first 100 chars for speed
    
    for (let i = 0; i < len; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32-bit integer
    }
    
    return hash.toString(16);
}

function generateRandomDeviceId() {
    const prefixes = ['iPhone', 'iPad', 'iPod'];
    const models = ['12,1', '12,3', '12,5', '13,1', '13,2', '13,3', '13,4', '14,2', '14,3', '14,4', '14,5'];
    const randomStr = Math.random().toString(36).substring(2, 10).toUpperCase();
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    
    return `${prefix}${model}-${randomStr}`;
}

function getRandomDeviceModel() {
    const models = [
        'iPhone12,1', 'iPhone12,3', 'iPhone12,5',
        'iPhone13,1', 'iPhone13,2', 'iPhone13,3', 'iPhone13,4',
        'iPhone14,2', 'iPhone14,3', 'iPhone14,4', 'iPhone14,5'
    ];
    return models[Math.floor(Math.random() * models.length)];
}

function cleanupCache() {
    const now = Date.now();
    const maxAge = 60000; // 60 seconds
    
    for (let [key, timestamp] of RTX_STATE.packetCache.entries()) {
        if (now - timestamp > maxAge) {
            RTX_STATE.packetCache.delete(key);
        }
    }
    
    RTX_STATE.lastCacheCleanup = now;
}

function logPerformance() {
    console.log(`\n📊 RTX PERFORMANCE REPORT`);
    console.log(`════════════════════════════════════════`);
    console.log(`Packets Total:     ${RTX_STATE.packetsTotal}`);
    console.log(`Packets Processed: ${RTX_STATE.packetsProcessed}`);
    console.log(`Processing Time:   ${RTX_STATE.avgProcessingTime.toFixed(2)}ms avg`);
    console.log(`Max Lag:           ${RTX_STATE.maxLag}ms`);
    console.log(`Cache Size:        ${RTX_STATE.packetCache.size}`);
    console.log(`Active Features:`);
    console.log(`  • Aimbot: ${RTX_CONFIG.aimbot ? 'ON' : 'OFF'} (${RTX_CONFIG.aimbotStrength}%)`);
    console.log(`  • Damage: ${RTX_CONFIG.damageMultiplier}x`);
    console.log(`  • Speed:  ${RTX_CONFIG.speedMultiplier}x`);
    console.log(`  • ESP:    ${RTX_CONFIG.wallhack ? 'ON' : 'OFF'}`);
    console.log(`════════════════════════════════════════\n`);
}

// ==============================================
// INITIALIZATION
// ==============================================

// Clear console for clean start
console.clear();

// Welcome message
console.log(`
╔═══════════════════════════════════════════╗
║     RTX-PERFECT PUBG MOBILE v${RTX_CONFIG.version}     ║
║         ALL-IN-ONE CONFIG FILE             ║
║        GitHub: Itssohaibh/pubg-real.js     ║
╚═══════════════════════════════════════════╝
`);

console.log('✅ Initializing RTX Engine...');
console.log('✅ ALL-IN-ONE: Config + JavaScript embedded');
console.log('✅ Performance monitoring active');
console.log('✅ Cache system enabled');
console.log('✅ Stealth mode active');
console.log('✅ Waiting for game packets...\n');

// Initialize cache cleanup interval
setInterval(() => {
    if (RTX_CONFIG.cacheEnabled) {
        cleanupCache();
    }
}, 30000); // Every 30 seconds

// Initial status
logPerformance();

// Export the main function
// Note: Shadowrocket automatically calls main() for script execution
// This ensures compatibility
})();
