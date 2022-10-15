local QBCore = exports['qb-core']:GetCoreObject()
QBCore.Commands.Add('announce', 'Send Server Announcement', { { name = 'message', help = 'Enter Announcement Message' } }
    ,
    false,
    function(source, args)
        if #args < 1 then TriggerClientEvent('QBCore:Notify', source, Lang:t('error.missing_args2'), 'error') return end
        local msg = table.concat(args, ' '):gsub('[~<].-[>~]', '')
        TriggerClientEvent('sendMessageAnnounceIt', -1, msg)
    end, 'admin')
