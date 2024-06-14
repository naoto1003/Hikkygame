// 座標音声チャンネル1対Nの入室処理をカスタマイズしたいときは、helConfig.hsのg_FirstPosChannelJoinTypeもしくはg_FailedPosChannelJoinTypeを
// CHANNEL_JOIN_TYPE_CUSTOMに設定したうえで、このファイルのFirstJoinCustomとFailedJoinCustomを実装する

component ChSJoinProcessMultiple
{
    ChSModelMultiple m_Model;

    public ChSJoinProcessMultiple()
    {
        m_Model = system.Layer_GetComponentByName<ChSModelMultiple>("vcc_icon_only_base");
    }

    public void FirstJoinCustom(JsVal val)
    {
        // カスタムの初回入室処理を実装
    }
    
    public void FailedJoinCustom(JsVal val)
    {
        // カスタムの入室失敗時の処理を実装
    }

    public void JoinFromURLRoomID(JsVal val)
    {
        string RoomID = hel_skyway_get_roomid();

        m_Model.EnterPosChannel(RoomID);
    }

    public void JoinRandomFreeSpace(JsVal val)
    {
        // JsVal params = hsCommonMakeParams();

        // hsCommonAddParamBool(params, "excludeEmptyChannelFlg", hsNetExcludeEmptyChannel());
        
        // hel_net_get_position_channel_list(_EnterRandomPosChannelCallback, hsNetGetSpatiumCode(), hsGetCurrentWorldId(), params);

        hel_net_get_position_channel_list(_EnterRandomPosChannelCallback, hsNetGetSpatiumCode(), hsGetCurrentWorldId(), 0, -1, hsNetExcludeEmptyChannel());
    }

    // ランダムなFreeSpaceに入室する
    void _EnterRandomPosChannelCallback(JsVal val)
    {
        // ルームIDが存在しない場合はランダムなFreeSpaceに入室する
        if(val === null || (val.GetType() != 1 && val.GetType() != 2))  return;

        list<JsProp> channel_prop_list = val.GetPropertyList();

        for(int i = 0; i < channel_prop_list.Count; i++)
        {
            JsVal PositionChannel = channel_prop_list[i].GetValue();
            if(PositionChannel === null || (PositionChannel.GetType() != 1 && PositionChannel.GetType() != 2)) continue;

            VCCPositionChannel Channel = new VCCPositionChannel();
            if(!Channel.Analyse(PositionChannel, true)) continue;

            // APIでランダム入室が実装されるまではひとまずチャンネルを全探索して名前が`FreeSpace_〇〇`に合致するものに入室する
            // 文字列が合致するかどうか
            if(Channel.Data.ChannelName.Length() < 9 || Channel.Data.ChannelName.SubString(0, 9) != "FreeSpace") continue;

            // 満員かどうか
            if(Channel.Data.JoinUsersData.Count + 1 > Channel.Data.MaxVoicePlayerCount) continue;

            // FreeSpaceが見つかったので入室する
            m_Model.CallHelPosConnectProcess(Channel);

            return;
        }

        // `FreeSpace_〇〇`が存在しないか満室なので新しくルームを作成する
        string NewRoomName = "FreeSpace_" + "%d" % hsMathRandom(999999);
        m_Model.CreateNewPosChannel(NewRoomName, "public");
    }

    public void JoinSelectedAnyRoom(JsVal val)
    {
        // チャンネルリストのUIを開く
        LayerBundle layer = hsLayerGet("vcc_icon_only_base");
        if(layer !== null)
        {
            layer.CallComponentMethod("VCCViewModel", "OpenChannelList", "");
        }
    }

    public void JoinNewRoom(JsVal val)
    {
        string NewRoomName = "FreeSpace_" + "%d" % hsMathRandom(999999);
        m_Model.CreateNewPosChannel(NewRoomName, "public");
    }

    public void RedirectToOutGame(JsVal val)
    {
        // 後ほどHeliScript組み込み関数を実装
        hel_transitionToPage(hsNetGetPosChannelRedirectURL("playerexceed"));
    }

    public bool CheckUserCount(JsVal val)
    {
        // チャンネル情報の解析
        if(val === null || (val.GetType() != 1 && val.GetType() != 2)) return false;

        VCCPositionChannel Channel = new VCCPositionChannel(); 
        if(!Channel.Analyse(val, false)) return false;

        if(Channel.Data.ChannelId.IsEmpty()) return false;

        // 指定ルームの入室人数をチェック
        // １対NタイプのRTCの時はMaxPosPlayerCountを見る
        // 満員かどうか
        if(Channel.Data.JoinUsersData.Count + 1 > Channel.Data.MaxPosPlayerCount) return false;

        // ルームが空いている
        return true;
    }
}