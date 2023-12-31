module.exports = {
    name: "Apply Permissions With Create Perms",

    description: "Applies the set of permissions to the role or channel. with built in Create Perms",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "target1",
            "name": "Target 1 (Role/Channel)",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The role or channel to set the permissions. Set the corresponded option in \"Target Type\".",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "target2",
            "name": "Target 2 (Role/Member)",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: Follow the instructions in \"Target Type\" option if necessary. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "id": "reason",
            "name": "Reason",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The reason for applying this set the permissions to the role or channel. This will appear in Audit Log of the server. (OPTIONAL)",
            "types": ["text", "unspecified"]
        }
    ],

    options: [
        {
            "id": "application_type",
            "name": "Application Type",
            "description": "Description: The type of application for the role or channel permissions.",
            "type": "SELECT",
            "options": {
                "set": "Set",
                "update": "Update",
            }
        },
        {
            "id": "target_type",
            "name": "Target Type",
            "description": "Description: The option related to the role/channel from the \"Target 1\" input.",
            "type": "SELECT",
            "options": {
                "role": "Role",
                "channel_everyone": "Channel (Related to @everyone role)",
                "channel_target": "Channel (Related to a specific role or member. Put the role or member in the \"Target 2\" input.)",
            }
        },
        {
            "id": "administrator",
            "name": "Administrator",
            "description": "Members with this permission have every permission and also bypass channel specific permissions. This is a dangerous permission to grant.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "view_audit_log",
            "name": "View Audit Log",
            "description": "Members with this permission have access to view the server's audit logs.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "view_guild_insights",
            "name": "View Server Insights",
            "description": "Members with this permission can view the server's insights.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_guild",
            "name": "Manage Server",
            "description": "Members with this permission can change the server's name and region and add bots, for example.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_roles",
            "name": "Manage Roles",
            "description": "Members with this permission can create, edit and delete roles lower than their highest role.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_channels",
            "name": "Manage Channels",
            "description": "Members with this permission can create new channels and edit and delete existing ones.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "kick_members",
            "name": "Kick Members",
            "description": "Members with this permission can kick members with lower roles.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "ban_members",
            "name": "Ban Members",
            "description": "Members with this permission can ban members with lower roles.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "create_instant_invite",
            "name": "Create Invite",
            "description": "Members with this permission can create new invites for the server.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "change_nickname",
            "name": "Change Nickname",
            "description": "Members with this permission can change their own nickname.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_nicknames",
            "name": "Manage Nicknames",
            "description": "Members with this permission can change nicknames of other members.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_emojis_and_stickers",
            "name": "Manage Emojis",
            "description": "Members with this permission can create new emojis and edit and delete existing ones.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_webhooks",
            "name": "Manage Webhooks",
            "description": "Members with this permission can create, edit and delete webhooks.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "view_channel",
            "name": "View Channel",
            "description": "Members with this permission can view/read the channel(s).",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "send_messages",
            "name": "Send Messages",
            "description": "Members with this permission can send messages to the channel(s).",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "send_tts_messages",
            "name": "Send TTS Messages",
            "description": "Members with this permission can send Text-To-Speech messages by starting a message with \"/tts\". These messages can be heard by everyone focused on the channel.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "manage_messages",
            "name": "Manage Messages",
            "description": "Members with this permission can delete messages by other members and pin any message.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "embed_links",
            "name": "Embed Links",
            "description": "Members with this permission can have their messages with embed support.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "attach_files",
            "name": "Attach Files",
            "description": "Members with this permission can send files.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "read_message_history",
            "name": "Read Message History",
            "description": "Members with this permission can read the old messages of the channel.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "mention_everyone",
            "name": "Mention @everyone",
            "description": "Members with this permission can use @everyone or @here to ping all members. They can also @mention all roles, even if the role's \"Allow anyone to mention this role\" permission is disabled.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "use_external_emojis",
            "name": "Use External Emojis",
            "description": "Members with this permission can use emojis from other servers in this server.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "add_reactions",
            "name": "Add Reactions",
            "description": "Members with this permission can add new reactions to a message. Members can still react using reactions already added to messages without this permission.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "connect",
            "name": "Connect",
            "description": "Members with this permission can connect/join the voice channel(s).",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "speak",
            "name": "Speak",
            "description": "Members with this permission can speak in the voice channel(s).",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "stream",
            "name": "Video",
            "description": "Members with this permission can stream in the voice channel(s).",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "mute_members",
            "name": "Mute Members",
            "description": "Members with this permission can mute members from speaking in the voice channels.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "deafen_members",
            "name": "Deafen Members",
            "description": "Members with this permission can deafen members from hearing anyone in the voice channels.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "move_members",
            "name": "Move Members",
            "description": "Members with this permission can drag other members out of the voice channel(s).",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "use_vad",
            "name": "Use Voice Activity",
            "description": "Members must use Push-to-talk in the voice channel(s) if this permission is disallowed.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        },
        {
            "id": "priority_speaker",
            "name": "Priority Speaker",
            "description": "Members with this permission have the ability to be more easily heard when speaking. When activated, the volume of others without this permission will be automatically lowered.",
            "type": "SELECT",
            "options": {
                "none": "Do Not Set",
                "allow": "Allow",
                "inherit": "Inherit/Neutral",
                "deny": "Deny"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {

        const {PermissionsBitField} = require("discord.js");

        const flags = [["administrator", "Administrator"], ["create_instant_invite", "CreateInstantInvite"], ["kick_members", "KickMembers"], ["ban_members", "BanMembers"], ["manage_channels", "ManageChannels"], ["manage_guild", "ManageGuild"], ["add_reactions", "AddReactions"], ["view_audit_log", "ViewAuditLog"], ["priority_speaker", "PrioritySpeaker"], ["stream", "Stream"], ["view_channel", "ViewChannel"], ["send_messages", "SendMessages"], ["send_tts_messages", "SendTTSMessages"], ["manage_messages", "ManageMessages"], ["embed_links", "EmbedLinks"], ["attach_files", "AttachFiles"], ["read_message_history", "ReadMessageHistory"], ["mention_everyone", "MentionEveryone"], ["use_external_emojis", "UseExternalEmojis"], ["view_guild_insights", "ViewGuildInsights"], ["connect", "Connect"], ["speak", "Speak"], ["mute_members", "MuteMembers"], ["deafen_members", "DeafenMembers"], ["move_members", "MoveMembers"], ["use_vad", "UseVAD"], ["change_nickname", "ChangeNickname"], ["manage_nicknames", "ManageNicknames"], ["manage_roles", "ManageRoles"], ["manage_webhooks", "ManageWebhooks"], ["manage_emojis_and_stickers", "ManageEmojisAndStickers"]];
        const target1 = this.GetInputValue("target1", cache);
        const target2 = this.GetInputValue("target2", cache);
        const reason = this.GetInputValue("reason", cache);
        const application_type = this.GetOptionValue("application_type", cache) + "";
        const target_type = this.GetOptionValue("target_type", cache) + "";

        const permissions = {
            allow: new PermissionsBitField(),
            inherit: new PermissionsBitField(),
            deny: new PermissionsBitField()
        }

        for (const [rawFlag, flag] of flags) {
            const permission = this.GetOptionValue(rawFlag, cache);

            if (permission && ["allow", "inherit", "deny"].includes(permission))
                permissions[permission].add(flag);
        }

        const convertPerms = (perms = {}) => {
            const res = {};

            if(perms.allow instanceof PermissionsBitField) {
                perms.allow.toArray().forEach(perm => {
                    res[perm] = true;
                });
            }
            if(perms.inherit instanceof PermissionsBitField) {
                perms.inherit.toArray().forEach(perm => {
                    res[perm] = null;
                });
            }
            if(perms.deny instanceof PermissionsBitField) {
                perms.deny.toArray().forEach(perm => {
                    res[perm] = false;
                });
            }

            return res;
        }

        const convertPerms2 = perms => {
            const res = perms.serialize(false);

            /*delete res.ADMINISTRATOR;
            delete res.VIEW_GUILD_INSIGHTS;
            delete res.MANAGE_ROLES;*/

            return res;
        }

        const convertPerms3 = perms => {
            const newPerms = new PermissionsBitField(target1.permissions);

            if(perms.allow instanceof PermissionsBitField) {
                newPerms.add(perms.allow);
            }
            if(perms.deny instanceof PermissionsBitField) {
                newPerms.remove(perms.deny);
            }

            return newPerms;
        }



        switch(application_type) {
            default: //case "set"
                switch(target_type) {
                    case "role":
                        target1.setPermissions(permissions instanceof PermissionsBitField ? permissions : permissions.allow, reason);
                        break;
                    case "channel_everyone":
                        target1.permissionOverwrites.create(target1.guild.id, permissions instanceof PermissionsBitField ? convertPerms2(permissions) : convertPerms(permissions), reason);
                        break;
                    case "channel_target":
                        target1.permissionOverwrites.create(target2, permissions instanceof PermissionsBitField ? convertPerms2(permissions) : convertPerms(permissions), reason);
                        break;
                }
                break;
            case "update":
                switch(target_type) {
                    case "role":
                        target1.setPermissions(permissions instanceof PermissionsBitField ? permissions : convertPerms3(permissions), reason);
                        break;
                    case "channel_everyone":
                        target1.permissionOverwrites.edit(target1.guild.id, permissions instanceof PermissionsBitField ? convertPerms2(permissions) : convertPerms(permissions), reason);
                        break;
                    case "channel_target":
                        target1.permissionOverwrites.edit(target2, permissions instanceof PermissionsBitField ? convertPerms2(permissions) : convertPerms(permissions), reason);
                        break;
                }
                break;
        }

        this.RunNextBlock("action", cache);
    }
}